const { compose, map, applySpec, identity, flatten, filter } = require('ramda');
const { allChildNodes, childNodes } = require('./childNodes');
const { hasName } = require('./nodeNames');

const allDescendants = node => compose(flatten, map(applySpec([identity, allDescendants])), allChildNodes)(node);
// doing this instead of filtering allDescendants in order to avoid building a huge array and filtering it
const descendants = 
    (localName, uri) => node => compose(flatten, applySpec([filter(hasName(localName, uri)), map(descendants(localName, uri))]), allChildNodes)(node);

module.exports = {
	allDescendants,
	descendants
};
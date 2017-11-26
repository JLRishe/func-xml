const { compose, filter } = require('ramda');
const { allChildNodes } = require('./childNodes');
const { isElement } = require('./nodeTypeTests');
const { hasName } = require('./nodeNames');

const allChildEls = compose(filter(isElement), allChildNodes);
const childEls = (localName, uri) => compose(filter(hasName(localName, uri)), allChildEls);

module.exports = {
	allChildEls,
	childEls
};
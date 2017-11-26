const { compose, prop, isNil, when, always, filter } = require('ramda');
const { toArray } = require('./shared');
const { hasName } = require('./nodeNames');

const normalizeToArray = when(isNil, always([]));

const allChildNodes = compose(toArray, normalizeToArray, prop('childNodes'));
const childNodes = (localName, uri) => compose(filter(hasName(localName, uri)), allChildNodes);

module.exports = {
	allChildNodes,
	childNodes
};
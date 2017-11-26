const { compose, prop, equals, both } = require('ramda');
const { propEq } = require('./shared');
const { LOCAL_NAME, NAMESPACE_URI } = require('./shared/constants');

const localName = prop(LOCAL_NAME);
const namespaceUri = prop(NAMESPACE_URI);
const hasLocalName = name => compose(equals(name), localName);
const inNamespace = uri => compose(equals(uri), namespaceUri);
const hasName = (localName, uri) => both(hasLocalName(localName), inNamespace(uri));

module.exports = {
	localName,
	namespaceUri,
	hasLocalName,
	inNamespace,
	hasName
};
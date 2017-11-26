const { isElement, isDocumentNode } = require('./nodeTypeTests');
const { localName, namespaceUri, hasLocalName, inNamespace, hasName } = require('./nodeNames');

module.exports = {
	allChildNodes: require('./allChildNodes'),
	isElement,
	isDocumentNode,
	localName,
	namespaceUri,
	hasLocalName,
	inNamespace,
	hasName
};
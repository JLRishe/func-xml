require('./babel-helpers');
const { isElement, isDocumentNode } = require('./nodeTypeTests');
const { localName, namespaceUri, hasLocalName, inNamespace, hasName } = require('./nodeNames');

const { allChildNodes, childNodes } = require('./childNodes');
const { allChildEls, childEls } = require('./childEls');
const { allDescendants, descendants} = require('./descendants');

module.exports = {
	isElement,
	isDocumentNode,
	
	localName,
	namespaceUri,
	hasLocalName,
	inNamespace,
	hasName,
	
	allChildNodes,
	childNodes,
	
	allChildEls,
	childEls,
	
	allDescendants,
	descendants
};
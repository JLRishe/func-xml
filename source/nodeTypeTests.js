const { whereEq } = require('ramda');
const { ELEMENT_NODE, DOCUMENT_NODE, NODE_TYPE } = require('./shared/constants');

const nodeTypeTest = type => whereEq({ [NODE_TYPE]: type });

module.exports = {
	isElement: nodeTypeTest(ELEMENT_NODE),
	isDocumentNode: nodeTypeTest(DOCUMENT_NODE)
};
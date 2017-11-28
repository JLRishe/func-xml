import { whereEq } from 'ramda';
import { ELEMENT_NODE, ATTRIBUTE_NODE, DOCUMENT_NODE, NODE_TYPE } from './shared/constants';

const nodeTypeTest = type => whereEq({ [NODE_TYPE]: type });

const isElement = nodeTypeTest(ELEMENT_NODE);
const isAttribute = nodeTypeTest(ATTRIBUTE_NODE);
const isDocumentNode = nodeTypeTest(DOCUMENT_NODE);

export {
    isElement, 
    isAttribute,
    isDocumentNode,
};
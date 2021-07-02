import { propEq } from 'ramda';
import { ELEMENT_NODE, ATTRIBUTE_NODE, TEXT_NODE, DOCUMENT_NODE, NODE_TYPE } from './shared/constants';

// String -> Node -> Boolean
const nodeTypeTest = propEq(NODE_TYPE);

const isElement = nodeTypeTest(ELEMENT_NODE);
const isText = nodeTypeTest(TEXT_NODE);
const isAttribute = nodeTypeTest(ATTRIBUTE_NODE);
const isDocumentNode = nodeTypeTest(DOCUMENT_NODE);

export {
    isElement,
    isAttribute,
    isText,
    isDocumentNode,
};
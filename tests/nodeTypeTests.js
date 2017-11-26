const assert = require('assert');
const { composeK, chain } = require('ramda');
const initDoc = require('./shared/initDoc');
const { allChildNodes, isElement, isDocumentNode } = require('..');

describe('node tests', () => {
	const doc = initDoc();
	const l1Nodes = allChildNodes(doc);
	const l2Nodes = chain(allChildNodes)(l1Nodes);

	it('should test element nodes', () => {
		assert.equal(false, isElement(doc));
		assert.equal(true, isElement(l1Nodes[0]));
		assert.equal(false, isElement(l2Nodes[0]));
		assert.equal(true, isElement(l2Nodes[1]));
		
	});	
	
	it('should test document nodes', () => {
		assert.equal(true, isDocumentNode(doc));
		assert.equal(false, isDocumentNode(l1Nodes[0]));
	});
});
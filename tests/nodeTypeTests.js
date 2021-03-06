const { strict: assert } = require('assert');
const { compose, filter, chain, head } = require('ramda');
const initDoc = require('./shared/initDoc');
const { allChildNodes, isElement, isAttribute, hasName, isText, isDocumentNode } = require('..');

describe('node tests', () => {
    const doc = initDoc();
    const l1Nodes = allChildNodes(doc);
    const l2Nodes = chain(allChildNodes)(l1Nodes);
    const l3Nodes = chain(allChildNodes)(l2Nodes);

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
    
    it('should test attribute nodes', () => {
        l3Nodes[1].attributes.getNamedItem('name');
        
        assert.equal(true, isAttribute(l3Nodes[1].attributes.getNamedItem('name')));
        assert.equal(false, isAttribute(l3Nodes[0]), 'text node');
        assert.equal(false, isAttribute(l3Nodes[1]), 'element node');
    });
    
    it('should test text nodes', () => {
       const textNode = compose(head, chain(allChildNodes), chain(allChildNodes), filter(hasName('deathlyHallows')))(l3Nodes);

       assert.equal(isText(textNode), true);
       assert.equal(isText(l3Nodes[1]), false);
    });
});
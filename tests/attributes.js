const assert = require('assert');
const { compose, composeK, chain, head } = require('ramda');
const { allAttributes, attributes, attribute, allChildNodes, childEls, allChildEls } = require('..');
const initDoc = require('./shared/initDoc');
const { NS_PEOPLE, NS_SERIES } = require('./shared/constants');


describe('attributes', () => {
    let doc, l1Nodes, l2Nodes, characters;
    
    before(() => {
        doc = initDoc();
        l1Nodes = allChildNodes(doc);
        l2Nodes = chain(allChildNodes)(l1Nodes);
        characters = chain(childEls('character', NS_PEOPLE))(l2Nodes);
    });

    it('should retrieve all attributes', () =>{
        var harryAttribs = compose(allAttributes, head)(characters);
        
        var l3Attribs = chain(allAttributes)(characters);
        
        assert.equal(harryAttribs.length, 2);
        assert.equal(l3Attribs.length, 4);
    });
    
    it('should select attributes by name', () => {
        const root = compose(head, allChildEls)(doc);

        const target = compose(head, attributes('target'))(root);
        const numBooks = compose(head, attributes('numBooks', NS_SERIES))(root);
        
        assert.equal(target.value, 'Young Adult');
        assert.equal(numBooks.value, '7');
    });
    
    it('should select single attributes by name', () => {
        const root = compose(head, allChildEls)(doc);

        const target = attribute('target')(root);
        const numBooks = attribute('numBooks', NS_SERIES)(root);
        const hippo = attribute('hippopotamus')(root);
        
        assert.equal(target.value, 'Young Adult');
        assert.equal(numBooks.value, '7');
        assert.strictEqual(hippo, null);        
    });
});
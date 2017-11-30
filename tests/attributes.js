const assert = require('assert');
const { compose, composeK, chain, head } = require('ramda');
const { allAttributes, attributes, allChildNodes, childEls, allChildEls } = require('..');
const initDoc = require('./shared/initDoc');
const { NS_PEOPLE, NS_SERIES } = require('./shared/constants');


describe('attribute tests', () => {
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
});
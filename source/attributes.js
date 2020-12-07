import { isNil, compose, prop, filter, head } from 'ramda'
import { coalesceArray, normalizeToNull } from './shared';
import { hasName } from './nodeNames';

const allAttributes = compose(coalesceArray, prop('attributes'));

const attributes = (localName, uri) => compose(filter(hasName(localName, uri)), allAttributes);

const attribute = (localName, uri) => compose(normalizeToNull, head, attributes(localName, uri));

const attributeValue = (localName, uri) => (node) => {
    const nullUri = isNil(uri);
    const present = nullUri ? node.hasAttribute(localName) : node.hasAttributeNS(uri, localName);

    if (!present) { return null; }

    return nullUri ? node.getAttribute(localName) : node.getAttributeNS(uri, localName);
}
    

export {
    allAttributes,
    attributes,
    attribute,
    attributeValue,
};
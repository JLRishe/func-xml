import { compose, prop, filter, head } from 'ramda'
import { coalesceArray } from './shared';
import { hasName } from './nodeNames';

const allAttributes = compose(coalesceArray, prop('attributes'));

const attributes = (localName, uri) => compose(filter(hasName(localName, uri)), allAttributes);

const attribute = (localName, uri) => compose(head, attributes(localName, uri));

export {
    allAttributes,
    attributes,
    attribute
};
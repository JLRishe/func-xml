import { compose, prop, filter } from 'ramda'
import { coalesceArray } from './shared';
import { hasName } from './nodeNames';

const allAttributes = compose(coalesceArray, prop('attributes'));

const attributes = (localName, uri) => compose(filter(hasName(localName, uri)), allAttributes);

export {
    allAttributes,
    attributes
};
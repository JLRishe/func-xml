import { compose, prop } from 'ramda'
import { coalesceArray } from './shared';

const allAttributes = compose(coalesceArray, prop('attributes'));


export {
    allAttributes
};
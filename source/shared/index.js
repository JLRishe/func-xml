import { compose, equals, when, isNil, always, either } from 'ramda';

const toArray = alo => Array.prototype.slice.call(alo);
const coalesceArray = compose(toArray, when(isNil, always([])));
const normalizeToNull = when(either(equals(''), isNil), always(null));

export { 
    toArray
    , coalesceArray
    , normalizeToNull
};
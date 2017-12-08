import { compose, curry, whereEq, equals, bind, when, isNil, always, either } from 'ramda';

const toArray = alo => Array.prototype.slice.call(alo);
const coalesceArray = compose(toArray, when(isNil, always([])));
const normalizeToNull = when(either(equals(''), isNil), always(null));

const propEq = curry((propName, value) => whereEq({ [propName]: value }));

export { 
    toArray
    , coalesceArray
    , normalizeToNull
    , propEq 
};
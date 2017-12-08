import { compose, prop, equals, both, when, always, either, isNil } from 'ramda';
import { normalizeToNull } from './shared';
import { LOCAL_NAME, NAMESPACE_URI } from './shared/constants';

const localName = prop(LOCAL_NAME);
const namespaceUri = compose(normalizeToNull, prop(NAMESPACE_URI));

const hasLocalName = name => compose(equals(name), localName);
const isInNamespace = uri => compose(equals(normalizeToNull(uri)), namespaceUri);
const hasName = (localName, uri) => both(hasLocalName(localName), isInNamespace(uri));

export {
    localName
    , namespaceUri

    , hasLocalName
    , isInNamespace
    , hasName
};
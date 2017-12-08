# func-xml
Functional XML DOM traversal library for JavaScript

_This library is a work in progress and there are more features I plan to add as time goes on._

## API Reference

### attributes

`allAttributes(node)`

Node -> [Node]

Returns a list of all attributes on the provided node.

`attributes(localName, namespaceUri = null)`

(String[, String]) -> Node -> [Node]

Returns a function which, when called on a node, returns a list of all attributes on the provided node that have the specified local name and namespace URI. By definition, this list would contain either 0 or 1 values.

### child elements

`allChildEls(node)`

Node -> [Node]

Returns a list of all child elements of the provided node, in document order.

`childEls(localName, namespaceUri = null)`

(String[, String]) -> Node -> [Node]

Returns a function which, when called on a node, returns a list of all child elemenets, in document order, of the provided node that have the specified local name and namespace URI.

### child nodes

`allChildNodes(node)`

Node -> [Node]

Returns a list of all child nodes of the provided node, in document order.

`childNodes(localName, namespaceUri = null)`

(String[, String]) -> Node -> [Node]

Returns a function which, when called on a node, returns a list of all child nodes, in document order, of the provided node that have the specified local name and namespace URI.

### descendants

`allDescendants(node)`

Node -> [Node]

Returns a list of all descendants of the provided node, in document order.

`descendants(localName, namespaceUri = null)`

(String[, String]) -> Node -> [Node]

Returns a function which, when called on a node, returns a list of all descendants, in document order, of the provided node that have the specified local name and namespace URI.

### node names and namespaces

`localName(node)`

Node -> String

Returns the local name of the provided node.

`hasLocalName(name)`

String -> Node -> Boolean

Returns a function which, when called on a node, returns true iff the node has the specified local name.

`namespaceUri(node)`

Node -> String

Returns the namespace URI of the provided node.

`inNamespace(namespaceUri)`

String -> Node -> Boolean

Returns a function which, when called on a node, returns true iff the node has is in the specified namespace.

`hasName(localName, namespaceUri = null)`

(String[, String]) -> Node -> Boolean

Returns a function which, when called on a node, returns true iff the node has the specified local name and is in the specified namespace.

### node type tests

`isElement(node)`

Node -> Boolean

Returns `true` iff the specified node is an element.

`isDocumentNode(node)`

Node -> Boolean

Returns `true` iff the specified node is a document node.

`isAttribute(node)` 

Node -> Boolean

Returns `true` iff the specified node is an attribute.

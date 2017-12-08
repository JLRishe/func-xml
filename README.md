# func-xml
Functional XML DOM traversal library for JavaScript

_This library is a work in progress and there are more features I plan to add as time goes on._

## API Reference

[attributes](#attributes)  
[child elements](#child-elements)  
[child nodes](#child-nodes)  
[descendants](#descendants)  
[node names and namespaces](#node-names-and-namespaces)  
[node type tests](#node-type-tests)

### attributes

`allAttributes(node)`

Node -> [Node]

Returns a list of all attributes on the provided node.

`attributes(localName, namespaceUri = null)`

(String[, String]) -> Node -> [Node]

Returns a function which, when called on a node, returns a list of all attributes on the provided node that have the specified local name and namespace URI. By definition, this list would contain either 0 or 1 values.

`attribute(localName, namespaceUri = null)`

(String[, String]) -> Node -> Node

Returns a function which, when called on a node, returns its attribute that has the specified local name and namespace URI. Returns `null` if no such attribute is present.

### child elements

`allChildEls(node)`

_Node -> [Node]_

Returns a list of all child elements of the provided node, in document order.

`childEls(localName, namespaceUri = null)`

_(String[, String]) -> Node -> [Node]_

Returns a function which, when called on a node, returns a list of all child elemenets, in document order, of the provided node that have the specified local name and namespace URI.

### child nodes

`allChildNodes(node)`

_Node -> [Node]_

Returns a list of all child nodes of the provided node, in document order.

`childNodes(localName, namespaceUri = null)`

_(String[, String]) -> Node -> [Node]_

Returns a function which, when called on a node, returns a list of all child nodes, in document order, of the provided node that have the specified local name and namespace URI.

### descendants

`allDescendants(node)`

_Node -> [Node]_

Returns a list of all descendants of the provided node, in document order.

`descendants(localName, namespaceUri = null)`

_(String[, String]) -> Node -> [Node]_

Returns a function which, when called on a node, returns a list of all descendants, in document order, of the provided node that have the specified local name and namespace URI.

### node names and namespaces

`localName(node)`

_Node -> String_

Returns the local name of the provided node.

`hasLocalName(name)`

_String -> Node -> Boolean_

Returns a function which, when called on a node, returns true iff the node has the specified local name.

`namespaceUri(node)`

_Node -> String_

Returns the namespace URI of the provided node.

`inNamespace(namespaceUri)`

_String -> Node -> Boolean_

Returns a function which, when called on a node, returns true iff the node has is in the specified namespace.

`hasName(localName, namespaceUri = null)`

_(String[, String]) -> Node -> Boolean_

Returns a function which, when called on a node, returns true iff the node has the specified local name and is in the specified namespace.

### node type tests

`isElement(node)`

_Node -> Boolean_

Returns `true` iff the specified node is an element.

`isDocumentNode(node)`

_Node -> Boolean_

Returns `true` iff the specified node is a document node.

`isAttribute(node)` 

_Node -> Boolean_

Returns `true` iff the specified node is an attribute.

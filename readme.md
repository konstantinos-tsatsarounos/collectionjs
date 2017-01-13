# _`CollectionJS`_ - a javascript dictionary library v1.5.1


A collection / dictionary list library for javascript. It provides a way to create enhanced Arrays, with search capabilities. Introduces two additional types of Arrays, the List and the Dictionary.

## Installation

```javascript
npm i collection-util-js
```
Declare the __dist/collection-min.js__ to your html file and use it.

```html
<script src="./node_modules/collection-util-js/dist/collection-min.js"></script>
```

## Types

- List Object
- Dictionary Object


```javascript
var somelist = new Collection.List();
var someDictionary = new Collection.Dictionary();
```

### List Methods

- get
- add
- iterate
- remove
- has
- toArray
- parse
- toJSON

### Dictionary Methods

- get
- add
- iterate
- remove
- has
- hasKey
- toArray
- parse
- toJSON


## Examples

#### List
```js
var somelist = new Collection.List();
somelist.add('hello');
somelist.add('test');
somelist.toArray() // ['hello', 'test']
```

#### Dictionary
```js
var someDictionary = new Collection.Dictionary();
somelist.add('MyKey', 'MyValue');
somelist.add('MyKey2', 'MyValue2');
somelist.toArray(); // ['MyValue', 'MyValue']
somelist.get('MyKey') // => MyValue
```
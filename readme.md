# _`CollectionJS`_ - a javascript dictionary library v1.5.5


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

## Tests

You can test running the following command in package's directory: 

```
npm test
```
#### Results for 1.5.5

 List                                                                                
   √ add method must add the passed value to the List                                
   √ get method must return the added value                                          
   √ toJSON method must returns a json object with two values                        
   √ remove method must removes all values equal with the passed                     
   √ has method                                                                      
   √ toArray method                                                                  
   √ toJSON method                                                                   
   √ parse method                                                                    
   √ iterate                                                                         
                                                                                     
 Dictionary                                                                          
   √ add method must add the passed value to the Dictionary assigned to the given key
   √ get method must return the added value                                          
   √ toJSON method must returns a json object with two key value pairs               
   √ remove method must remove the key value pair, marked by the passed key          
   √ remove method must return true if a delete is successful                        
   √ has method                                                                      
   √ hasKey method                                                                   
   √ toArray method                                                                  
   √ toJSON method                                                                   
   √ parse method                                                                    
   √ iterate                                                                       
                                                                                     
                                                                                     
 20 passing (33ms)                                                                   
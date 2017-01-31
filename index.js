/**
 * Created by Konstantinos Tsatsarounos<konstantinos.tsatsarounos@gmail.com>
 * Project Name:
 * Filename: index.js
 * Date: 14/1/2017
 * Time: 4:34 πμ
 */

//Remit Collection object for use on nodejs scripts
var Collection = require('./src/collection');

var newList = Collection.List();
newList.add('hello');
var val = newList.toJSON();

var newList2 = Collection.List();
var val2 = newList2.toJSON();

module.exports = Collection;
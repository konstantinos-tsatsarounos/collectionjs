/**
 * Created by Konstantinos Tsatsarounos<konstantinos.tsatsarounos@gmail.com>
 * Project Name:
 * Filename: ${FILE_NAME}
 * Date: 11/1/2017
 * Time: 11:12 μμ
 */

var expect = require('chai').expect;
var assert = require('chai').assert;
var should = require('chai').should();

var collection = require('../src/collection');

describe('List', function () {
	var List = new collection.List();

	it('add method must add the passed value to the List', function () {
		List.add('hello');
		List.get(1).should.equal('hello');
	});

	it('get method must return the added value', function () {
		List.add('test');
		List.get(2).should.equal('test');
	});

	it('toJSON method must returns a json object with two values', function () {
		List.toJSON().should.equal('{"1":"hello","2":"test"}');
	});

	it('remove method must removes all values equal with the passed', function () {
		List.add('test'); List.remove('test');
		List.toJSON().should.equal('{"1":"hello"}');
	});
});
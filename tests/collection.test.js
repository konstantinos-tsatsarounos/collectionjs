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

	it('has method', function () {
		List.has('hello').should.be.true
	});

	it('toArray method', function () {
		expect( Array.isArray( List.toArray() ) ).to.be.true;
		expect( List.toArray() ).to.have.lengthOf(1);
	});

	it('toJSON method', function () {
		List.toJSON().should.equal('{"1":"hello"}');
	});


	it('parse method', function () {
		List.parse(["hello", "test"]);
		List.toJSON().should.be.equal('{"1":"hello","2":"test"}');
	});

	it('iterate method must change every value', function () {
		List.add('bananas');
		List.add('apple');
		List.add('pineapple');

		List.iterate(function (current, index) {
			return current + "t";
		});

		expect( List.toArray() ).to.have.lengthOf(5);
		List.toJSON().should.be.equal('{"1":"hellot","2":"testt","3":"bananast","4":"applet","5":"pineapplet"}');
	});

	it('iterate method must not change the value if function returns void', function () {
		List.iterate(function (current, index) {
			current  = current + "p";
		});

		expect( List.toArray() ).to.have.lengthOf(5);
		List.toJSON().should.be.equal('{"1":"hellot","2":"testt","3":"bananast","4":"applet","5":"pineapplet"}');
	});

});


describe('Dictionary', function () {
	var Dictionary = new collection.Dictionary();

	it('add method must add the passed value to the Dictionary assigned to the given key', function () {
		Dictionary.add('test', 'myname');
		Dictionary.get('test').should.equal('myname');
	});

	it('get method must return the added value', function () {
		Dictionary.get('test').should.equal('myname');
	});

	it('toJSON method must returns a json object with two key value pairs', function () {
		Dictionary.add('username', 'kostas')
		Dictionary.toJSON().should.equal('{"test":"myname","username":"kostas"}');
	});

	it('remove method must remove the key value pair, marked by the passed key', function () {
		Dictionary.remove('username');
		Dictionary.toJSON().should.equal('{"test":"myname"}');
	});

	it('remove method must return true if a delete is successful', function () {
		Dictionary.add('username', 'kostas');
		expect( Dictionary.remove('username') ).to.be.true;
	});

	it('has method', function () {
		Dictionary.has('myname').should.be.true
	});

	it('hasKey method', function () {
		Dictionary.hasKey('test').should.be.true
	});

	it('toArray method', function () {
		expect( Array.isArray(Dictionary.toArray()) ).to.be.true;
		expect( Dictionary.toArray() ).to.have.lengthOf(1);
	});

	it('toJSON method', function () {
		Dictionary.toJSON().should.equal('{"test":"myname"}');
		expect(Dictionary.toJSON()).to.be.a('string');
	});

	it('parse method', function () {
		Dictionary.parse(["hello", "test"], ["hellokey", "testkey"]);
		Dictionary.toJSON().should.be.equal('{"hellokey":"hello","testkey":"test"}');
	});

	it('iterate method must change every value', function () {
		Dictionary.add('yellow','bananas');
		Dictionary.add('red','apple');
		Dictionary.add('orange','pineapple');

		Dictionary.iterate(function (current, index) {
			return current + "t";
		});

		expect( Dictionary.toArray() ).to.have.lengthOf(5);
		Dictionary.toJSON().should.be.equal(
			'{"hellokey":"hellot","testkey":"testt","yellow":"bananast","red":"applet","orange":"pineapplet"}'
		);
	});

	it('iterate method must not change the value if function returns void', function () {
		Dictionary.iterate(function (current, index) {
			current  = current + "p";
		});

		expect( Dictionary.toArray() ).to.have.lengthOf(5);
		Dictionary.toJSON().should.be.equal(
			'{"hellokey":"hellot","testkey":"testt","yellow":"bananast","red":"applet","orange":"pineapplet"}'
		);
	});
});
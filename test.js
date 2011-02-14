/*globals require */

var convert = require('./index'),
	assert = require('assert'),
	expected = 'ÅÄÖåäö';

convert.file('ISO-8859-1.txt', function(err, converted){
	assert.equal(converted, expected);
});

convert.file('MacRoman.txt', 'MacRoman', function(err, converted){
	assert.equal(converted, expected);
});
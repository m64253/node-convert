/*globals require module */
var Iconv = require('iconv').Iconv,
	Buffer = require('buffer').Buffer,
	fs = require('fs'),
	convert = function(data, from, to) {
		from = from || 'ISO-8859-1';
		to = to || 'UTF-8';
		
		var iconv = new Iconv(from, to),
			buffer = iconv.convert(data);
		
		return buffer.toString(to);
	};

convert.file = function() {
	
	var args = Array.prototype.slice.call(arguments),
		file = args.shift(),
		fn = args.pop();
	
	fs.readFile(file, function (err, data) {
		if (err) {
			return fn(err);
		}
		
		args.unshift(data);
		
		var converted = convert.apply(convert, args);
		
		fn(null, converted);
	});
};

module.exports = convert;
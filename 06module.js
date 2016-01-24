var fs = require('fs');
var pth = require('path');
var _ = require('underscore');

//array.forEach(function(element){ console.log(element);})

module.exports = function callbackTester (directoryName, fileExtension, callback) {

	fs.readdir(directoryName, function (err, list)
	{

		var filter = '.'+fileExtension;
		var result = [];
		if (err)
           return callback(err)
		else
		{
	         result = _.filter(list, function(file){ 	return pth.extname(file) === filter; } );
	         callback(null, result);
	 	}
	});

}

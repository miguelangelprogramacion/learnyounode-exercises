var fs = require('fs');
var pth = require('path');
var _ = require('underscore');

//array.forEach(function(element){ console.log(element);})

var buff = fs.readdir(process.argv[2], function (err, list)
{

	var filter = '.'+process.argv[3];

	if(!err)
	{
	         var filtered = _.filter(list, function(file){ 	return pth.extname(file) === filter; } );
	         filtered.forEach(function(element){ console.log(element);});
	 }
});

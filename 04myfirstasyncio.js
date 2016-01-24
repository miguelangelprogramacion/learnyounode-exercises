var fs = require('fs');

//array.forEach(function(element){ console.log(element);})

var buff = fs.readFile(process.argv[2], function (err, data)
	{
		if(!err){
			var array = data.toString().split('\n');
			console.log(array.length - 1);
		}
	 });
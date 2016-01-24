var mymodule = require('./06module.js');
mymodule(process.argv[2],process.argv[3],function (err, filelist)
{
	if (err)  
         return console.error('There was an error:', err)  

		      filelist.forEach(function(element){ console.log(element);});
		   });
/*  Write a program that performs an HTTP GET request to a URL provided to you
  as the first command-line argument. Write the String contents of each
  "data" event from the response to a new line on the console (stdout).*/

var http = require('http');

 http.get(process.argv[2],  function (response)
 {
 		/*The response object / Stream that you get from http.get() also has a
  		setEncoding() method. If you call this method with "utf8", the "data"
  		events will emit Strings rather than the standard Node Buffer objects
 		which you have to explicitly convert to Strings.*/
 		response.setEncoding('utf8');

 		response.on("data", function (data) { console.log(data)});
 });

/*OFFICIAL SOLUTION
var http = require('http') 

http.get(process.argv[2], function (response) {
       response.setEncoding('utf8')
       response.on('data', console.log)
       response.on('error', console.error)
     })
*/
var fs = require('fs');

var buff = fs.readFileSync(process.argv[2]);
var st = buff.toString();
var array = st.split('\n');

console.log(array.length - 1);

//array.forEach(function(element){ console.log(element);})

var _ = require('underscore');

//console.log(process.argv);

var sum = _.reduce(_.rest(process.argv,2), function(memo,num){ return memo + Number(num); }, 0);
console.log(sum);

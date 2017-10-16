var fs = require('fs');

var data = fs.readFileSync('local-groups.json');

data = JSON.parse(data);

console.log( JSON.stringify(data,null,2) );

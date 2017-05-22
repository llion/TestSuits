var fs = require("fs");[]
fs.writeFile('./multi.vsn','Hello Node.js',(err) => {
	if (err) throw err;
	console.log('It\'s saved!');
});
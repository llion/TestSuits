var fs = require("fs");
fs.writeFile('ftp://192.168.42.129/program/multi.vsn','Hello Node.js',function(err){
	if (err) {
		throw err;
	}
	console.log('Saved.');
});
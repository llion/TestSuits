var fs = require("fs");
fs.writeFile('../multiline.vsn',function(err){
	if (err) {
		throw err;
	}
	console.log('Saved.');
	fs.readFile('ftp://192.168.42.129/program/multiline.vsn','utf-8',function(err,data){
		if (err) {
			throw err;
		}
		console.log(data);
	});
});
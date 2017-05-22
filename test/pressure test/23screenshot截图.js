var http = require('http');
var URL = "http://192.168.42.129";
var request = require("request");
var fs = require('fs');
var screenshotURL = URL + "/transmission/ftp/config";
count = 0;
function fn() {
	request(screenshotURL,function(error,response,body) {
		console.log("截图");
		count ++;
		const ws = fs.createWriteStream('./img/demo'+ count + '.png');
		ws.on('error', function(err) { console.log(err); });
		request(screenshotURL).on('data', function(chunk) {
			ws.write(chunk);
			console.log(count);
			setTimeout(function(){
				ws.close();
				console.log('callback is call');
			},1000);
		});

	});
};
setInterval(fn,1000);
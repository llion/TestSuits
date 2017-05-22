var http = require('http');
var request = require("request");
var apiURL = "http://192.168.42.129/api";
var infoURL = apiURL + "/info.json";
var vsnsURL = apiURL + "/vsns.json";
var assert = require('assert');
function fn(){
	request(infoURL,function(error,response,body){
		//console.log(JSON.parse(body));
		console.log(JSON.parse(body).info.vername);
		console.log(JSON.parse(body).info.serialno);
		console.log(JSON.parse(body).info.model);
		console.log(JSON.parse(body).info.playing.name);
		console.log(JSON.parse(body).info.playing.path);
		console.log(JSON.parse(body).info.playing.source);
		assert.equal(JSON.parse(body).info.vername,'1.32.12');
		assert.equal(JSON.parse(body).info.serialno,'CLCC60000289');
		assert.equal(JSON.parse(body).info.model,'c6');
		assert.equal(JSON.parse(body).info.playing.name,'new.vsn');
		assert.equal(JSON.parse(body).info.playing.path,'/mnt/sdcard/Android/data/com.color.home/files/Ftp/program');
		assert.equal(JSON.parse(body).info.playing.source,'lan');
		//assert.equal()
	})
}
setInterval(fn,1000);
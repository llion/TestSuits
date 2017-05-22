var http = require('http');
var apiURL = "http://192.168.42.129/api";
var request = require("request");
var changeVsn = apiURL + "/vsns/sources/lan/vsns/new.vsn/activated";
var infoURL = apiURL + "/info.json";
var assert = require('assert');
const exec = require('child_process').exec;
const cmdStrvsn = 'curl ftp://192.168.42.129/program/ -T ../programs/new.vsn';
const cmdStrmkd = 'curl ftp://192.168.42.129/program/ -X "MKD new.files"';
const cmdStrvideo = 'curl ftp://192.168.42.129/program/new.files/ -T ../programs/new.files/a.mp4';
//var apiURL = "http://192.168.42.129/api";
//var changeVsn = apiURL + "/vsns/sources/lan/vsns/new.vsn/activated";

exec(cmdStrvsn, function (err, stdout, stderr) {
                if (err) {
                    console.log('文件上传 error:' + stderr);
                } else {
                    console.log(stdout);
                }
            });
			
exec(cmdStrmkd, function (err, stdout, stderr) {
                if (err) {
                    console.log('创建文件夹 error:' + stderr);
                } else {
                    console.log(stdout);
                }
            });
exec(cmdStrvideo, function (err, stdout, stderr) {
                if (err) {
                    console.log('上传资源文件 error:' + stderr);
                } else {
                    console.log(stdout);
                }
            });
			
	function fn() {
		var changePrograms = {
            url:'http://192.168.42.129/api/vsns/sources/lan/vsns/new.vsn/activated',
            method:'PUT',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{}
        };
	request(changePrograms,function (error,response,body) {
            //expect(response.statusCode).to.equal(200);
			console.log("hsadgjh");
	request(infoURL,function(error,response,body){
		   console.log(JSON.parse(body));
		   assert.deepEqual(JSON.parse(body).info.playing.name,'new.vsn');
	});
	});
	};
	fn();
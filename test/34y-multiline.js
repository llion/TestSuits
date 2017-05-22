var request = require("request");
var expect = require('chai').expect;
var exec = require('child_process').exec;
var apiURL = "http://192.168.42.129/api";
var infoURL = apiURL + "/info.json"
var cmdStrvsn0 = 'curl -F "f1=@vsn/multiline0.vsn"  http://192.168.42.129/api/program/multiline0.vsn --verbose';
var cmdStrvsn1 = 'curl -F "f1=@vsn/multiline1.vsn"  http://192.168.42.129/api/program/multiline1.vsn --verbose';
var cmdStrvsn2 = 'curl -F "f1=@vsn/multiline2.vsn"  http://192.168.42.129/api/program/multiline2.vsn --verbose';
var cmdStrvsn3 = 'curl -F "f1=@vsn/multiline3.vsn"  http://192.168.42.129/api/program/multiline3.vsn --verbose';

  describe("发布节目singleline-moving-5fonts",function () {
	  this.timeout(11000);
	describe("上传json格式多行文本", function () {
		it("上传文本", function (done) {
			exec(cmdStrvsn0,function fn(err,stdout,stderr){
		if (err){
			console.log("多行文本 Error:" + stderr);
		}else{
			console.log(stdout);
		}
		setTimeout(done,3000);
		});
		});
		
		it("上传文本", function (done) {
			exec(cmdStrvsn1,function fn(err,stdout,stderr){
		if (err){
			console.log("多行文本 Error:" + stderr);
		}else{
			console.log(stdout);
		}
		setTimeout(done,3000);
		});
		});
		
		it("上传文本", function (done) {
			exec(cmdStrvsn2,function fn(err,stdout,stderr){
		if (err){
			console.log("多行文本 Error:" + stderr);
		}else{
			console.log(stdout);
		}
		setTimeout(done,3000);
		});
		});
		
		it("上传文本", function (done) {
			exec(cmdStrvsn3,function fn(err,stdout,stderr){
		if (err){
			console.log("多行文本 Error:" + stderr);
		}else{
			console.log(stdout);
		}
		setTimeout(done,3000);
		});
		});
	
	it("正在播放multiline.vsn", function (done) {
            request(infoURL, function (error, response, body) {
                var result = JSON.parse(body);
                expect(result.info.playing.name).to.equal("multiline3.vsn");
				setTimeout(done,2000);
            });
        });
		});
	})



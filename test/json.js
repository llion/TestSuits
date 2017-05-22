var request = require("request");
var expect = require('chai').expect;
var exec = require('child_process').exec;
var apiURL = "http://192.168.42.129/api";
var infoURL = apiURL + "/info.json"
var cmdStrvsn1 = 'curl -F "f1=@vsn/multiline.vsn"  http://192.168.42.129/api/program/multiline.vsn --verbose';
var cmdStrvsn2 = 'curl -F "f1=@vsn/multipic.vsn" -F "f2=@multipic/13486.jpg" -F "f3=@multipic/19613.jpg" -F "f4=@multipic/19614.jpg" -F "f5=@multipic/19627.jpg" http://192.168.42.129/api/program/multipic.vsn --verbose';
var cmdStrvsn3 = 'curl -F "f1=@vsn/singleline.vsn"  -F "f2=@singleline/one.txt" http://192.168.42.129/api/program/singleline.vsn --verbose';
var cmdStrvsn4 = 'curl -F "f1=@vsn/text_pic_video_timer_clock_webview_multiPage.vsn"  -F "f2=@singleline/one.txt" -F "f3=@abc.mp3" -F "f4=@multipic/13486.jpg" -F "f5=@multipic/19613.jpg" -F "f6=@multipic/19614.jpg" -F "f7=@text_pic_video_timer_clock_webview_multiPage/a.mp3" -F "f8=@text_pic_video_timer_clock_webview_multiPage/b.mp3" -F "f9=@text_pic_video_timer_clock_webview_multiPage/1.mp4" http://192.168.42.129/api/program/text_pic_video_timer_clock_webview_multiPage.vsn --verbose';
var cmdStrvsn5 = 'curl -F "f1=@vsn/singleline_multiline_pic.vsn"  -F "f2=@singleline/one.txt" -F "f3=@abc.mp3" -F "f4=@multipic/13486.jpg" -F "f5=@multipic/19613.jpg" -F "f6=@multipic/19614.jpg" http://192.168.42.129/api/program/singleline_multiline_pic.vsn --verbose';
var cmdStrvsn6 = 'curl -F "f1=@vsn/timer_clock_bgAudio_multiPage.vsn" -F "f2=@abc.mp3"  http://192.168.42.129/api/program/timer_clock_bgAudio_multiPage.vsn --verbose';

  describe("发布节目singleline-moving-5fonts",function () {
	  this.timeout(3000);
	describe("上传json格式多行文本", function () {
		it("上传文本", function (done) {
		exec(cmdStrvsn1,function fn(err,stdout,stderr){
		if (err){
			console.log("多行文本 Error:" + stderr);
		}else{
			console.log(stdout);
		}
		setTimeout(done,1000);
	});
		});
	it("正在播放multiline.vsn", function (done) {
            request(infoURL, function (error, response, body) {
                var result = JSON.parse(body);
                expect(result.info.playing.name).to.equal("multiline.vsn");
				setTimeout(done,2000);
            });
        });
		});
	});
	
	describe("发布节目multipic.vsn",function () {
		this.timeout(3000);
	describe("上传json格式图片", function () {
		it("上传文本", function (done) {
		exec(cmdStrvsn2,function fn(err,stdout,stderr){
		if (err){
			console.log("多行文本 Error:" + stderr);
		}else{
			console.log(stdout);
		}
		setTimeout(done,1000);
	});
		});
	
	it("正在播放multipic.vsn", function (done) {
            request(infoURL, function (error, response, body) {
                var result = JSON.parse(body);
                expect(result.info.playing.name).to.equal("multipic.vsn");
				setTimeout(done,2000);
            });
        });
		});
	});
	
	describe("发布节目singleline.vsn",function () {
		this.timeout(3000);
	describe("上传json格式单行文本", function () {
		it("上传文本", function (done) {
		exec(cmdStrvsn3,function fn(err,stdout,stderr){
		if (err){
			console.log("多行文本 Error:" + stderr);
		}else{
			console.log(stdout);
		}
		setTimeout(done,1000);
	});
		});
	
	it("正在播放singleline.vsn", function (done) {
            request(infoURL, function (error, response, body) {
                var result = JSON.parse(body);
                expect(result.info.playing.name).to.equal("singleline.vsn");
				setTimeout(done,2000);
            });
        });
		});
	});
	
	describe("发布节目text_pic_video_timer_clock_webview_multiPage.vsn",function () {
		this.timeout(27000);
	describe("上传json格式文件", function () {
		it("上传文本", function (done) {
		exec(cmdStrvsn4,function fn(err,stdout,stderr){
		if (err){
			console.log("多行文本 Error:" + stderr);
		}else{
			console.log(stdout);
		}
		setTimeout(done,20000);
	});
		});
	
	it("正在播放text_pic_video_timer_clock_webview_multiPage.vsn", function (done) {
            request(infoURL, function (error, response, body) {
                var result = JSON.parse(body);
                expect(result.info.playing.name).to.equal("text_pic_video_timer_clock_webview_multiPage.vsn");
				setTimeout(done,1000);
            });
        });
		});
	});
	
	describe("发布节目singleline_multiline_pic.vsn",function () {
		this.timeout(10000);
	describe("上传json格式文件", function () {
		it("上传文本", function (done) {
		exec(cmdStrvsn5,function fn(err,stdout,stderr){
		if (err){
			console.log("多行文本 Error:" + stderr);
		}else{
			console.log(stdout);
		}
		setTimeout(done,9000);
	});
		});
	
	it("正在播放singleline_multiline_pic.vsn", function (done) {
            request(infoURL, function (error, response, body) {
                var result = JSON.parse(body);
                expect(result.info.playing.name).to.equal("singleline_multiline_pic.vsn");
				setTimeout(done,1000);
            });
        });
		});
	});
	
	describe("发布节目timer_clock_bgAudio_multiPage.vsn",function () {
		this.timeout(3000);
	describe("上传json格式文件", function () {
		it("上传文本", function (done) {
		exec(cmdStrvsn6,function fn(err,stdout,stderr){
		if (err){
			console.log("多行文本 Error:" + stderr);
		}else{
			console.log(stdout);
		}
		setTimeout(done,2000);
	});
		});
	
	it("正在播放timer_clock_bgAudio_multiPage.vsn", function (done) {
            request(infoURL, function (error, response, body) {
                var result = JSON.parse(body);
                expect(result.info.playing.name).to.equal("timer_clock_bgAudio_multiPage.vsn");
				setTimeout(done,1000);
            });
        });
		});
	});
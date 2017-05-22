var request = require("request");
var expect = require('chai').expect;
var exec = require('child_process').exec;
var apiURL = "http://192.168.42.129/api";
var infoURL = apiURL + "/info.json"
var cmdStrvsn = 'curl -F "f1=@vsn/timer_clock_bgAudio_multiPage.vsn" -F "f2=@abc.mp3"  http://192.168.42.129/api/program/timer_clock_bgAudio_multiPage.vsn --verbose';

  describe("发布节目timer_clock_bgAudio_multiPage.vsn",function () {
	this.timeout(3000);
	describe("上传json格式文件", function () {
		it("上传文本", function (done) {
		exec(cmdStrvsn,function fn(err,stdout,stderr){
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
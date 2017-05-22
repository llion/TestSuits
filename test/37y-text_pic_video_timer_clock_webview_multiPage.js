var request = require("request");
var expect = require('chai').expect;
var exec = require('child_process').exec;
var apiURL = "http://192.168.42.129/api";
var infoURL = apiURL + "/info.json"
var cmdStrvsn = 'curl -F "f1=@vsn/text_pic_video_timer_clock_webview_multiPage.vsn"  -F "f2=@singleline/one.txt" -F "f3=@abc.mp3" -F "f4=@multipic/13486.jpg" -F "f5=@multipic/19613.jpg" -F "f6=@multipic/19614.jpg" -F "f7=@text_pic_video_timer_clock_webview_multiPage/a.mp3" -F "f8=@text_pic_video_timer_clock_webview_multiPage/b.mp3" -F "f9=@text_pic_video_timer_clock_webview_multiPage/1.mp4" http://192.168.42.129/api/program/text_pic_video_timer_clock_webview_multiPage.vsn --verbose';

  describe("发布节目text_pic_video_timer_clock_webview_multiPage.vsn",function () {
	this.timeout(27000);
	describe("上传json格式文件", function () {
		it("上传文本", function (done) {
		exec(cmdStrvsn,function fn(err,stdout,stderr){
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
	})
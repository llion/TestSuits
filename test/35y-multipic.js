var request = require("request");
var expect = require('chai').expect;
var exec = require('child_process').exec;
var apiURL = "http://192.168.42.129/api";
var infoURL = apiURL + "/info.json"
var cmdStrvsn = 'curl -F "f1=@vsn/multipic.vsn" -F "f2=@multipic/13486.jpg" -F "f3=@multipic/19613.jpg" -F "f4=@multipic/19614.jpg" -F "f5=@multipic/19627.jpg" http://192.168.42.129/api/program/multipic.vsn --verbose';

  describe("发布节目multipic.vsn",function () {
	this.timeout(3000);
	describe("上传json格式图片", function () {
		it("上传文本", function (done) {
		exec(cmdStrvsn,function fn(err,stdout,stderr){
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
	})



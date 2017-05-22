var http = require('http');
var request = require("request");
var expect = require('chai').expect;
var apiURL = "http://192.168.42.129/api";
//var changeVsn = apiURL + "/vsns/sources/lan/vsns/new.vsn/activated";
var infoURL = apiURL + "/info.json";

describe("change programs",function () {
	this.timeout(8000);
	describe("回读正在播放节目", function () {
		it("正在播放new.vsn", function (done) {
			request(infoURL,function(error,response,body) {
			var result =JSON.parse(body).info.playing.name;
			console.log("原始节目是:%s",result);
		setTimeout(describe("to new.vsn",function () {
				var changePrograms = {
				url:'http://192.168.42.129/api/vsns/sources/lan/vsns/new.vsn/activated',
				method:'PUT',
				headers: {'Content-Type':'application/json;charset=UTF-8'},
				json:true,
				body:{}
				};
        it("修改节目到new.vsn成功",function (done) {
            request(changePrograms,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
				done();
            });
        });
		}),3000);
			describe("to new.vsn",function () {
				var changePrograms1 = {
					url:'http://192.168.42.129/api/vsns/sources/lan/vsns/' + result + '/activated',
					method:'PUT',
					headers: {'Content-Type':'application/json;charset=UTF-8'},
					json:true,
					body:{}
				};
				it("修改节目到result成功:",function (done) {
					request(changePrograms1,function (error,response,body) {
						expect(response.statusCode).to.equal(200);
						console.log(result);
						done();
					});
					//setTimeout(done,5000);
				});
			});
			expect(response.statusCode).to.equal(200);
						//console.log("结束");
						setTimeout(done,5000);
	});
	});
    });
});
//console.log(result);
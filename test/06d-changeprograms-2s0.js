var http = require('http');
var request = require("request");
var expect = require('chai').expect;
var apiURL = "http://192.168.42.129/api";
var infoURL = apiURL + "/info.json";
var result;

describe("change programs",function () {
	this.timeout(6000);
	describe("回读正在播放节目", function () {
		it("回读以前的result节目",function(done) {
			request(infoURL,function(error,response,body) {
				result =JSON.parse(body).info.playing.name;
				console.log("原始节目是:%s",result);
				expect(response.statusCode).to.equal(200);
				done();
			});
		});
		
		describe("to new.vsn",function () {
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
					setTimeout(done,3000);
				});

		});
		
		describe("to new.vsn",function () {
			it("修改节目到new.vsn成功",function (done) {
				var changePrograms = {
				url:'http://192.168.42.129/api/vsns/sources/lan/vsns/' + result + '/activated',
				method:'PUT',
				headers: {'Content-Type':'application/json;charset=UTF-8'},
				json:true,
				body:{}
				};
				request(changePrograms,function (error,response,body) {
					expect(response.statusCode).to.equal(200);
					console.log(result);
					setTimeout(done,3000);
				});
			});
		});
		});
	});
});
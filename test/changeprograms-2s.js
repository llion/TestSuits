var http = require('http');
var request = require("request");
var expect = require('chai').expect;
var apiURL = "http://192.168.42.129/api";
var changeVsn = apiURL + "/vsns/sources/lan/vsns/new.vsn/activated";
var infoURL = apiURL + "/info.json";

describe("change programs",function () {
    this.timeout(2000);
    describe("to new.vsn",function () {
        var changePrograms = {
            url:'http://192.168.42.129/api/vsns/sources/lan/vsns/new.vsn/activated',
            method:'PUT',
            json:true,
            body:{}
        };
        it("修改节目到new.vsn成功",function (done) {
            request(changePrograms,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                setTimeout(done,1000);
            });
        });

    });

    describe("回读正在播放节目", function () {
        var url = infoURL;
        it("正在播放new.vsn", function (done) {
            request(url,function (error, response, body) {
                var result = JSON.parse(body);
                expect(result.info.playing.name).to.equal("new.vsn");
                done();
            });
        });
    });
});
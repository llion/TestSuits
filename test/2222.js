var http = require('http');
var request = require("request");
var expect = require('chai').expect;
var apiURL = "http://192.168.42.129/api";
//var changeVsn = apiURL + "/vsns/sources/lan/vsns/new.vsn/activated";
var infoURL = apiURL + "/info.json";
var result = "new.vsn";

describe("change programs",function () {
    describe("to new.vsn",function () {
        var changePrograms = {
            url:'http://192.168.42.129/api/vsns/sources/lan/vsns/'+ result + '/activated',
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

    });

    describe("回读正在播放节目", function () {
        var url = infoURL;
        it("正在播放new.vsn", function (done) {
            var vsnk = function (error, response, body) {
                var result = JSON.parse(body);
                expect(result.info.playing.name).to.equal("new.vsn");
                done();
            };
            var reqvsnk = function () {
                request(url,vsnk);
            };
            setTimeout(reqvsnk,1000);
        });
    });
});
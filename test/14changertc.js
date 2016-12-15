var http = require('http');
var apiURL = "http://192.168.42.129/api";
var getrtcRUL = apiURL + "/rtc.json";
var setrtcURL = apiURL + "/rtc";
var request = require("request");
var expect  = require("chai").expect;

describe("时间设置 200",function () {
    describe("设置时间为:2016-11-11 17:02:02时区：+8",function () {
        var setrtcjs = {
            url:setrtcURL,
            method:'PUT',
            headers: {'Content-Type':'application/jsoncharset=UTF-8'},
            json:true,
            body:{
                "time": "2016-11-11 17:02:02",
                "timezone": "+08",
                "isautotimezone": 1,
                "isautotime": 0
            }
        };
        it("设置时间 returns status 200", function(done) {
            request(setrtcjs, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

    });

    describe("时间",function () {
        it("获取 return 200",function (done) {
            request(getrtcRUL,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it("sleep status 200", function(done) {
            request(getrtcRUL, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                //console.log(JSON.stringify(body));
                var rtctime = JSON.parse(body);
                console.log(rtctime);
                expect(rtctime.time).to.equal('2016-11-11 17:02:02');
                expect(rtctime.timezone).to.equal("+08");
                done();
            });
        });
    });


});
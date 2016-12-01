var http = require('http');
var apiURL = "http://192.168.42.129/api";
var getsendingcardRUL = apiURL + "/sendingcard.json";
var setsendingcardURL = apiURL + "/sendingcard";
var request = require("request");
var expect  = require("chai").expect;

describe("sendingcard 测试",function () {
    this.timeout(7000);
    describe("设置发送卡网口控制面积:256x128,效果看大屏",function () {
        var setsendingcardjs = {
            url:setsendingcardURL,
            method:'PUT',
            json:true,
            body:{
                "dimension": {
                    "height": 0,
                    "width": 0
                },
                "frameflavor": {
                    "isinterlaced": 0
                },
                "netareas": [
                    {
                        "height": 128,
                        "startx": 0,
                        "starty": 0,
                        "width": 256
                    },
                    {
                        "height": 128,
                        "startx": 0,
                        "starty": 512,
                        "width": 1280
                    }
                ]
            }
        };
        it("设置A口面积：256x128",function (done) {
            request(setsendingcardjs,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                setTimeout(done,5000);
            }); 
        });
    });
	
    
    describe("回读设置网口面积",function () {
        it("A口回读成功，是：256x128",function (done) {
            var sending = function (error,response,body) {
                var getsending = JSON.parse(body);
                expect(getsending.frameflavor.isinterlaced).to.equal(0);
                expect(getsending.netareas[0].height).to.equal(128);
                expect(getsending.netareas[0].width).to.equal(256);
                done();
                console.log(getsending);
            };
            var reqsending = function () {
                request(getsendingcardRUL,sending);
            };
            setTimeout(reqsending,1000);
        })
    });

    describe("恢复发送卡面积到:1280x512",function () {
        var setsendingcardjs = {
            url:setsendingcardURL,
            method:'PUT',
            json:true,
            body:{
                "dimension": {
                    "height": 0,
                    "width": 0
                },
                "frameflavor": {
                    "isinterlaced": 0
                },
                "netareas": [
                    {
                        "height": 512,
                        "startx": 0,
                        "starty": 0,
                        "width": 1280
                    },
                    {
                        "height": 512,
                        "startx": 0,
                        "starty": 512,
                        "width": 1280
                    }
                ]
            }
        };
        it("恢复A口面积到原状：1280x512,效果看大屏",function (done) {
            var getsending = function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                done();
            };
            var getreqsending = function () {
                request(setsendingcardjs,getsending);
            };
            setTimeout(getreqsending,500);
        });
    });
});
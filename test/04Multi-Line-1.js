var http = require("http");
var expect = require("chai").expect;
var request = require("request");
var apiURL = "http://192.168.42.129/api";
var MultitextURL = apiURL + "/program/Multi-Line.vsn";
var infoURL = apiURL + "/info.json";

describe("多行文本节目发布",function () {
    this.timeout(5000);
    describe("多行文本测试",function () { 
        var Multitextjs = {
            method:"POST",
            url:MultitextURL,
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{
              "Programs": {
                "Program": {
                  "Pages": [{
                      "Regions": [
                          {
                            "Rect": {
                              "X": "0",
                              "Y": "0",
                              "Width": "512",
                              "Height": "128"
                            },
                            "Items": [{
                                "Type": "5",
                                "Text" : "Multi line text test",
                                "IsScroll": "0",
                                "IsScrollByTime":"1",
                                "MultiPicInfo":{
                                    "OnePicDuration":"10000"
                                },
                                "LogFont": {
                                  "lfHeight": "72",
                                  "lfWidth": "0"
                                }
                            }]
                          }           
                        ]
                    }]
                }
              }
            }
        };

        it("发布多行文本",function (done) {
            request(Multitextjs,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                setTimeout(done,1500);
            });
        });
    });

    describe("获取正在播放节目", function () {
        it("正在播放Multi-Line.vsn", function (done) {
            request(infoURL, function (error, response, body) {
                var result = JSON.parse(body);
                expect(result.info.playing.name).to.equal("Multi-Line.vsn");
                done();
            });
        });
    });
});
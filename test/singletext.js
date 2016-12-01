var http = require("http");
var expect = require("chai").expect;
var request = require("request");
var apiURL = "http://192.168.42.129/api";
var singletextURL = apiURL + "/program/singletext";


describe("单行文本节目发布",function () {
    describe("单行文本测试",function () {
        var singletextjs = {
            method:"POST",
            url:singletextURL,
            json:true,
            body:{
                "text":"Single line text test",
                "x":0,
                "y":0,
                "width":256,
                "height":256,
                "font":{
                    "name":"楷体",
                    "size":72,
                    "style":{
                        "i":0,
                        "b":1,
                        "u":0
                    },
                    "color":"0xFFFF0000"
                },
                "bgcolor":"0xFF000001",
                "scroll":{
                    "dir":"left",
                    "isconnected":0,
                    "speed":60
                }
            }
        };

        it("发布单行文本",function (done) {
            request(singletextjs,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });
});
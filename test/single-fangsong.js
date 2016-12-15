var http = require("http");
var expect = require("chai").expect;
var request = require("request");
var apiURL = "http://192.168.42.129/api";
var singletextURL = apiURL + "/program/singletext";
var singlek = require("../json/single-fangsong.json");

describe("单行文本节目发布",function () {
    describe("单行文本测试",function () {
        var singletextjs = {
            method:"POST",
            url:singletextURL,
            json:true,
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            body:singlek
        };

        it("发布单行文本",function (done) {
            request(singletextjs,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });
});
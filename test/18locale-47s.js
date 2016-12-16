var http = require('http');
var apiURL = "http://192.168.42.129/api";
var getlocaleRUL = apiURL + "/locale.json";
var setlocaleURL = apiURL + "/locale";
var request = require("request");
var expect  = require("chai").expect;

describe("设置语言 200",function () {
    this.timeout(125000);
    describe("设置语言为：英文",function () {
        var setlocalejs = {
            url:setlocaleURL,
            method:'PUT',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{
                "language": "en",
                "country": ""
            }
        };
        it("设置英文到盒子", function(done) {
            request(setlocalejs, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                setTimeout(done,60000);
            });
        });

    });

    describe("获取语言",function () {
        it("获取语言 return 200",function (done) {
            request(getlocaleRUL,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                setTimeout(done,2000);
            });
        });

        it("读取语言为英文成功", function(done) {
            request(getlocaleRUL, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                var localelanguage = JSON.parse(body);
                console.log(localelanguage);
                expect(localelanguage.language).to.equal('en');
                expect(localelanguage.country).to.equal("");
                done();
            });
        });
    });

    describe("将语言恢复为：中文",function () {
        var setlocalejs = {
            url:setlocaleURL,
            method:'PUT',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{
                "language": "zh",
                "country": "CN"
            }
        };
        it("恢复中文到盒子", function(done) {
            request(setlocalejs, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                setTimeout(done,60000);
            });
        });

    });
    describe("获取语言",function () {
        it("获取语言是否为中文",function (done) {
            request(getlocaleRUL,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                setTimeout(done,2000);
            });
        });

        it("读取语言为中文", function(done) {
            request(getlocaleRUL, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                var localelanguage = JSON.parse(body);
                console.log(localelanguage);
                expect(localelanguage.language).to.equal('zh');
                expect(localelanguage.country).to.equal("CN");
                done();
            });
        });
    });

});
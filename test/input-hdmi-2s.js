var http = require('http');
var apiURL = "http://192.168.42.129/api";
var getinputmodeRUL = apiURL + "/inputmode.json";
var setinputmodeURL = apiURL + "/inputmode";
var request = require("request");
var expect  = require("chai").expect;


describe("输入模式切换 测试",function () {
    this.timeout(2000);
    describe("切换输入模式到",function () {
        var setinputmodejs = {
            url:setinputmodeURL,
            method:'PUT',
            json:true,
            body:{
                "inputmode":"hdmi"
            }
        };

        it("切换为HDMI模式成功",function (done) {
            request(setinputmodejs,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                setTimeout(done,1500);
            });
        })
    });


    describe("回读输入模式",function () {
        it("输入模式为HDMI",function (done) {
            request(getinputmodeRUL,function (error,response,body) {
                var getinputmode = JSON.parse(body);
                expect(getinputmode.inputmode).to.equal('hdmi');
                console.log(getinputmode);
                done();
            });
        })
    });
});
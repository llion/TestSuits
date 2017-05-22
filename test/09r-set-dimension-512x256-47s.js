var http = require("http");
var expect = require("chai").expect;
var request = require("request");
var apiURL = "http://192.168.42.129/api";
var setdimensionURL = apiURL + "/dimension";
var getdimensionURL = apiURL + "/dimension.json";

describe("分辨率设置",function () {
    this.timeout(47000);
    describe("设置分辨率为:512x256",function () {
        var setdimensionjs = {
            url:setdimensionURL,
            method:"PUT",
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{width:512,height:256,hsync:0,dclk:0}
        };
        it("设置为512x256",function (done) {
            request(setdimensionjs,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                //console.log(body);
                done();
            });
        });
    });

    describe("读取分辨率",function () {
        it("分辨率回读为512x256",function (done) {
            var dimen = function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                var getdimensionjs = JSON.parse(body);
                console.log(getdimensionjs);
                expect(getdimensionjs.width).to.equal(512);
                expect(getdimensionjs.height).to.equal(256);
                done();
            };
            var reqdimen = function () {
                request(getdimensionURL,dimen);
            };
            setTimeout(reqdimen,45000);
        });
    });
});
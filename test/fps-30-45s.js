var http = require('http');
var apiURL = "http://192.168.42.129/api";
var getfpsRUL = apiURL + "/fps.json";
var setfpsURL = apiURL + "/fps";
var request = require("request");
var expect  = require("chai").expect;



describe("fps设置 测试",function () {
    this.timeout(45000);
    describe("设置fps为30",function () {
        var setfpsjs = {
            url:setfpsURL,
            method:'PUT',
            json:true,
            body:{
                "fps": 30
            }
        };

        it("设置为30成功",function (done) {
            request(setfpsjs,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                setTimeout(done,43000);
            });
        });
    });


    describe("回读fps值",function () {
        it("fps等于30",function (done) {
            request(getfpsRUL,function (error,response,body) {
                var getfps = JSON.parse(body);
                expect(getfps.fps).to.equal(30);
                console.log(getfps);
                done();
            });
        });
    });
});
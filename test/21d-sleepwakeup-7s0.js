var http = require('http');
var apiURL = "http://192.168.42.129/api";
var changestatusRUL = apiURL + "/action";
var request = require("request");
var expect  = require("chai").expect;

describe("休眠与唤醒",function () {
    this.timeout(5000);
    describe("休眠",function () {
        var changeStatuscX = {
            url:changestatusRUL,
            method:'POST',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{
                "command":"sleep"
            }
        };

        it("休眠指令发送",function (done) {
            request(changeStatuscX,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                setTimeout(done,3000);
            });
        });

        it("获取状态为休眠", function(done) {
            var powerstatusURL = 'http://192.168.42.129/api/powerstatus.json';
            request(powerstatusURL, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                var sleepstatus = JSON.parse(body);
                //console.log(JSON.stringify(body));
                console.log(sleepstatus);
                expect(sleepstatus.powerstatus).to.equals(0);
                //setTimeout(done,5000);
				done();
            });
        });
    });

    describe("发送唤醒指令",function () {
        var changeStatuscX = {
            url:changestatusRUL,
            method:'POST',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{
                command:"wakeup"
            }
        };

        it("唤醒指令发布",function (done) {
            request(changeStatuscX,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                setTimeout(done,2000);
            });
        });

        it("获取状态为唤醒", function(done) {
            var powerstatusURL = 'http://192.168.42.129/api/powerstatus.json';
            request(powerstatusURL, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                //console.log(JSON.stringify(body));
                var wakeupstatus = JSON.parse(body);
                console.log(wakeupstatus);
                expect(wakeupstatus.powerstatus).to.equals(1);
                done();
            });
        });
    });
});
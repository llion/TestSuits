var http = require('http');
var apiURL = "http://192.168.42.129/api";
var getalarmRUL = apiURL + "/alarm.json";
var setalarmURL = apiURL + "/alarm";
var request = require("request");
var expect  = require("chai").expect;

describe("定时休眠唤醒设置与读取",function () {
    this.timeout(2000);
    describe("定时休眠唤醒设置",function () {
        var setalarmjs = {
            url:setalarmURL,
            method:'POST',
            json:true,
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            body:{
                sleep:"16:10:20",
                wakeup:"16:10:30",
                reboot:""
            }
        };
        it("设置定时休眠唤醒", function(done) {
            request(setalarmjs, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

    
    describe("定时时间",function () {
        it("获取 成功",function (done) {
            request(getalarmRUL,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                setTimeout(done,1000);
            });
        });

        it("读取定时休眠与设置一致", function(done) {
            request(getalarmRUL, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                var alarmtime = JSON.parse(body);
				console.log(alarmtime);
                expect(alarmtime.sleepTime).to.equal(setalarmjs.body.sleep);
                expect(alarmtime.wakeupTime).to.equal(setalarmjs.body.wakeup);
                done();
            });
        });
    });
});

    describe("清除定时休眠唤醒设置",function () {
        var setalarmjs = {
            url:setalarmURL,
            method:'POST',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{
                "sleep":"",
                "wakeup":"",
                "reboot":""
            }
        };
        it("清除成功", function(done) {
            request(setalarmjs,function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                setTimeout(done,500);
            });
        });
    });
});
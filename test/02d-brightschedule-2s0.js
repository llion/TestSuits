var http = require('http');
var apiURL = "http://192.168.42.129/api";
var getbrightscheduleRUL = apiURL + "/brightschedule.json";
var setbrightscheduleURL = apiURL + "/brightschedule";
var request = require("request");
var expect  = require("chai").expect;


describe("定时亮度 测试",function () {
    this.timeout(4000);
    describe("设置定时亮度",function () {
        var setbrightschedulejs = {
            url:setbrightscheduleURL,
            method:'POST',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{
                "interval": 60,
                "schedule": [
                    {
                        "brightness": 15,
                        "time": "15:36:00"
                    },
                    {
                        "brightness": 200,
                        "time": "15:36:20"
                    },
                    {
                        "brightness": 80,
                        "time": "15:36:40"
                    }
                ]
            }
        };

        it("定时亮度设置成功",function (done) {
            request(setbrightschedulejs,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                setTimeout(done,1000);
            });
        })


    describe("回读定时亮度",function () {
        it("3个值完全准确",function (done) {
            request(getbrightscheduleRUL,function (error,response,body) {
                var getbrightschedule = JSON.parse(body);
                expect(getbrightschedule.interval).to.deep.equal(setbrightschedulejs.body.interval);
                expect(getbrightschedule.schedule[0]).to.deep.equal(setbrightschedulejs.body.schedule[0]);
                expect(getbrightschedule.schedule[1]).to.deep.equal(setbrightschedulejs.body.schedule[1]);
                expect(getbrightschedule.schedule[2]).to.deep.equal(setbrightschedulejs.body.schedule[2]);
                console.log(getbrightschedule);
                setTimeout(done,500);
            });
        });
    });
});
describe("清楚定时亮度",function () {
        var setbrightschedulejs = {
            url:setbrightscheduleURL,
            method:'POST',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{
                "interval": 0,
                "schedule": [
                    {
                       "interval":0,
					   "schedule":[],
					    "brightness": null,
                        "time": " "  
                    }
                ]
            }
        };

        it("定时亮度设置成功",function (done) {
            request(setbrightschedulejs,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                setTimeout(done,1000);
            });
        })


    describe("回读定时亮度",function () {
        it("3个值完全准确",function (done) {
            request(getbrightscheduleRUL,function (error,response,body) {
                var getbrightschedule = JSON.parse(body);
                expect(getbrightschedule.interval).to.deep.equal(setbrightschedulejs.body.interval);
                expect(getbrightschedule.schedule[0]).to.deep.equal(setbrightschedulejs.body.schedule[0]);
                console.log(getbrightschedule);
                setTimeout(done,500);
            });
        });
    });
});
});
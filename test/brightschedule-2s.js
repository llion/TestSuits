var http = require('http');
var apiURL = "http://192.168.42.129/api";
var getbrightscheduleRUL = apiURL + "/brightschedule.json";
var setbrightscheduleURL = apiURL + "/brightschedule";
var request = require("request");
var expect  = require("chai").expect;


describe("定时亮度 测试",function () {
    this.timeout(2000);
    describe("设置定时亮度",function () {
        var setbrightschedulejs = {
            url:setbrightscheduleURL,
            method:'POST',
            json:true,
            body:{
                "interval": 20,
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
                done();
            });
        })
    });


    describe("回读定时亮度",function () {
        it("3个值完全准确",function (done) {
            request(getbrightscheduleRUL,function (error,response,body) {
                var getbrightschedule = JSON.parse(body);
                expect(getbrightschedule.interval).to.equal(20);
                expect(getbrightschedule.schedule[0].brightness).to.equal(15);
                expect(getbrightschedule.schedule[1].brightness).to.equal(200);
                expect(getbrightschedule.schedule[2].brightness).to.equal(80);
                console.log(getbrightschedule);
                setTimeout(done,1500);
            });
        });
    });
});
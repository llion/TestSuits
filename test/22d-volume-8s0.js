var http = require('http');
var apiURL = "http://192.168.42.129/api";
var getvolumeRUL = apiURL + "/volume.json";
var setvolumeURL = apiURL + "/volume";
var request = require("request");
var expect  = require("chai").expect;


describe("音量 测试",function () {
    this.timeout(7500);
    describe("设置音量：13",function () {
        var setvolumejs = {
            url:setvolumeURL,
            method:'PUT',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{
                "musicvolume":13
            }
        };

        it("ledvision读取值为85%",function (done) {
            request(setvolumejs,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                setTimeout(done,700);
            });

        })
    });

    describe("回读音量是否为：13",function () {
        it("回读数据，音量值13，ledvision显示85%左右",function (done) {
            var fk = function (error,response,body) {
                var getvolume = JSON.parse(body);
                expect(getvolume.musicvolume).to.equal(13);
                console.log(getvolume);
                done();
            };
            var fks = function () {
                request(getvolumeRUL,fk);
            };
            setTimeout(fks,6000);
        })
    });
    describe("恢复音量到:6",function () {
        var setvolumejs = {
            url:setvolumeURL,
            method:'PUT',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{
                "musicvolume":6
            }
        };
        it("恢复音量至6",function (done) {
            var fke = function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                //var getvolume2 = JSON.parse(body);
                done();
            };
            var fkev = function () {
                request(setvolumejs,fke);
            };
            setTimeout(fkev,500);
        });
    });
    describe("回读音量是否回读到6",function(){
        it("回读音量为6，ledvision显示40%左右",function (done) {
            var fken = function(req,res,body){
                var getvolume2 = JSON.parse(body);
                expect(getvolume2.musicvolume).to.equal(6);
                console.log(getvolume2);
                done();
            };
            var getvolk = function(){
                request(getvolumeRUL,fken);
            };
            setTimeout(getvolk,500);
        });
    });
});
var http = require("http");
var expect  = require("chai").expect;
var request = require("request");
var fs = require("fs");
var apiURL = "http://192.168.42.129/api";
var networkURL = apiURL + "/network.json";
var getifstatusURL = apiURL + "/ifstatus.json";
var cmdPing = "ping 192.168.1.33";
var exec = require("child_process").exec;
var adbconnect = "adb connect 192.168.42.129";
var awkwlan0ip = "adb shell ip a | grep wlan0 | grep inet | awk '{print $2}'";
var networkwifiaplan = require("../json/network-wifiap.json");

describe('network set ',function () {
  this.timeout(15000);
    describe('set static ip',function () {
        var setNetWork = {
            method:'POST',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            url:'http://192.168.42.129/api/network',
            body:networkwifiaplan,
            json:true};
        it("set static success",function(done) {
            request(setNetWork,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });

    describe('获取wifiap信息',function () {
        it("wifiap信息读取", function(done) {
            request(networkURL,function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                setTimeout(done,7000);
            });
        });

        it("adb 链接到盒子",function(done){
          exec(adbconnect,function(err,stdout,stderr){
            if(err){
              console.log("无法连接到盒子" + stderr);
            }else{
              console.log(stdout);
            }
            setTimeout(done,5000);
          })
        })

        it("adb shell 读取盒子内部wifiap",function(done){
          exec(awkwlan0ip,function(err,stdout,stderr){
            if(err){
              console.log("无法获取盒子wifiap信息" + stderr);
            }else{
              console.log(stdout);
            }
            expect(stdout).to.equal('192.168.43.1/24\n');
            setTimeout(done,5000);
          })
        })

        it("设置wifiap为c3-dddddd channel:9成功", function(done) {
            request(networkURL, function(error, response, body) {
                var networkkevin = JSON.parse(body);
                console.log(networkkevin);
                expect(networkkevin.types[1].SSID).to.equal("c3-dddddd");
                expect(networkkevin.types[1].channel).to.equal(9);
                expect(networkkevin.types[1].enabled).to.equal(1);
                expect(networkkevin.types[0].enabled).to.equal(0);
                expect(networkkevin.types[2].enabled).to.equal(0);
                done();
            });
        });
    });
})
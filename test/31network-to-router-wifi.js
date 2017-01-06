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
var awkwlan0ip = "adb shell ip a | grep wlan0 | grep inet | awk '{print $4}'";
var networkTorouterWifi = require("../json/network-to-router-wifi.json");

describe('network set ',function () {
  this.timeout(19000);
    describe('链接到路由器wifi',function () {
        var setNetWorkwifi = {
            method:'POST',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            url:'http://192.168.42.129/api/network',
            body:networkTorouterWifi,
            json:true};
        it("return set router wifi",function(done) {
            request(setNetWorkwifi,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                setTimeout(done,10000);
            });
        });
    });

    describe('读取连接到路由器wifi enabled:1',function () {
        it("returns get router wifi 200", function(done) {
            request(networkURL,function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it("连接到wifi路由器kevin成功。 ", function(done) {
            request(getifstatusURL, function(error, response, body) {
                var ifstatuskevin = JSON.parse(body);
                console.log(ifstatuskevin);
                expect(ifstatuskevin.types[0].enabled).to.equal(0);
                expect(ifstatuskevin.types[2].enabled).to.equal(0);
                expect(ifstatuskevin.types[1].enabled).to.equal(1);
                expect(ifstatuskevin.types[1].type).to.equal("wifi");
                expect(ifstatuskevin.types[1].currentap).to.equal("kevin");
                done();
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

        it("adb shell 查看盒子wifi网关",function(done){
          exec(awkwlan0ip,function(err,stdout,stderr){
            if(err){
              console.log("链接到路由器wifi出错：" + stderr);
            }else{
              console.log(stdout);
            }
            expect(stdout).to.equal("192.168.9.255\n");
            done();
          })
        })
    });
});
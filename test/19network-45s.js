var http = require("http");
var expect  = require("chai").expect;
var request = require("request");
var fs = require("fs");
var apiURL = "http://192.168.42.129/api";
var networkURL = apiURL + "/network.json";
var getifstatusURL = apiURL + "/ifstatus.json";
var cmdPing = "ping 192.168.0.33";
var exec = require("child_process").exec;
var adbconnect = "adb connect 192.168.42.129";
var awkEth0ip = "adb shell ip a | grep eth0 | grep inet | awk '{print $2}'";
var awkwlan0ip = "adb shell ip a | grep wlan0 | grep inet | awk '{print $4}'";
var networkwifiaplan = require("../json/network-wifiap-lan.json"); 
var networkTorouterWifi = require("../json/network-to-router-wifi.json");

describe('network set ',function () {
  this.timeout(55000);
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
                setTimeout(done,15000);
            });
        });
    });

    describe('获取是否为静态ip',function () {
        it("静态ip，wifiap读取成功", function(done) {
            request(networkURL,function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
        it("ping 192.168.0.33静态ip是否通过",function(done){
          exec(cmdPing,function(err,stdout,stderr){
            if(err){
              console.log("无法ping通ip，固定ip设置失败"+stderr);
            }else{
              console.log(stdout);
            }
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

        it("adb shell 读取盒子内部lan口ip",function(done){
          exec(awkEth0ip,function(err,stdout,stderr){
            if(err){
              console.log("无法获取盒子内部ip" + stderr);
            }else{
              console.log(stdout);
            }
            done();
          })
        })

        it("设置静态ip = 192.168.0.33 wifiap为c4-0457 channel:9成功", function(done) {
            request(networkURL, function(error, response, body) {
                var networkkevin = JSON.parse(body);
                console.log(networkkevin);
                expect(networkkevin.types[2].ips.ip).to.equal("192.168.0.33");
                expect(networkkevin.types[2].enabled).to.equal(1);
                expect(networkkevin.types[1].SSID).to.equal("c4-0457");
                expect(networkkevin.types[1].channel).to.equal(9);
                expect(networkkevin.types[1].enabled).to.equal(1);
                done();
            });
        });
    });

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
                setTimeout(done,12000);
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
            expect(stdout).to.equal("192.168.1.255\n");
            done();
          })
        })

        it("连接到wifi路由器dd-wrt-01-2.4G成功。 ", function(done) {
            request(getifstatusURL, function(error, response, body) {
                var ifstatuskevin = JSON.parse(body);
                console.log(ifstatuskevin);
                expect(ifstatuskevin.types[0].enabled).to.equal(0);
                expect(ifstatuskevin.types[2].enabled).to.equal(0);
                expect(ifstatuskevin.types[1].enabled).to.equal(1);
                expect(ifstatuskevin.types[1].type).to.equal("wifi");
                expect(ifstatuskevin.types[1].currentap).to.equal("dd-wrt-01-2.4G");
                done();
            });
        });
    });
});
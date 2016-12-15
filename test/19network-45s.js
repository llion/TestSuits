var http = require("http");
var expect  = require("chai").expect;
var request = require("request");
var fs = require("fs");
var apiURL = "http://192.168.42.129/api";
var networkURL = apiURL + "/network.json";
var getifstatusURL = apiURL + "/ifstatus.json";

describe('network set ',function () {
  this.timeout(45000);
    describe('set static ip',function () {
        var setNetWork = {
            method:'POST',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            url:'http://192.168.42.129/api/network',
            body:{
              "types": [
                {
                  "SSID": "",
                  "ips": {},
                  "pass": "",
                  "type": "wifi",
                  "channel": 0,
                  "enabled": 0,
                  "isstatic": 0
                },
                {
                  "dns1": "",
                  "dns2": "",
                  "ips": {
                    "gateway": "192.168.9.1",
                    "ip": "192.168.9.38",
                    "mask": "255.255.255.0"
                  },
                  "type": "lan",
                  "channel": 0,
                  "enabled": 1,
                  "isstatic": 1
                },
                {
                  "SSID": "c3-dddddd",
                  "ips": {},
                  "pass": "123456789",
                  "type": "wifi ap",
                  "channel": 9,
                  "enabled": 1,
                  "isstatic": 0
                },
                {
                  "SSID": "",
                  "dns1": "",
                  "dns2": "",
                  "mac": "",
                  "pass": "",
                  "type": "4G",
                  "channel": 0,
                  "enabled": 0,
                  "isstatic": 0
                }
              ]
            },
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


        it("设置静态ip = 192.168.9.38 wifiap为c3-dddddd channel:9成功", function(done) {
            request(networkURL, function(error, response, body) {
                //console.log(body);
                var networkkevin = JSON.parse(body);
                console.log(networkkevin);
                expect(networkkevin.types[2].ips.ip).to.equal("192.168.9.38");
                expect(networkkevin.types[2].enabled).to.equal(1);
                expect(networkkevin.types[1].SSID).to.equal("c3-dddddd");
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
            body:{
              "types": [
                {
                  "SSID": "kevin",
                  "ips": {},
                  "pass": "180380580",
                  "type": "wifi",
                  "channel": 0,
                  "enabled": 1,
                  "isstatic": 0
                },
                {
                  "dns1": "",
                  "dns2": "",
                  "ips": {
                    "gateway": "192.168.9.1",
                    "ip": "192.168.9.38",
                    "mask": "255.255.255.0"
                  },
                  "type": "lan",
                  "channel": 0,
                  "enabled": 0,
                  "isstatic": 1
                },
                {
                  "SSID": "c3-dddddd",
                  "ips": {},
                  "pass": "123456789",
                  "type": "wifi ap",
                  "channel": 9,
                  "enabled": 0,
                  "isstatic": 0
                },
                {
                  "SSID": "",
                  "dns1": "",
                  "dns2": "",
                  "mac": "",
                  "pass": "",
                  "type": "4G",
                  "channel": 0,
                  "enabled": 0,
                  "isstatic": 0
                }
              ]
            },
            json:true};
        it("return set router wifi",function(done) {
            request(setNetWorkwifi,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                setTimeout(done,25000);
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
                //expect(ifstatuskevin.types[1].ips.broadcast).to.equal("192.168.9.255");
                done();
            });
        });
    });
});
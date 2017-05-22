var http = require("http");
var expect  = require("chai").expect;
var fs = require("fs");
var apiURL = "http://192.168.42.129/api";
var getifstatusURL = apiURL + "/ifstatus.json";
var request = require("request");
var expect  = require("chai").expect;
var pingURL = apiURL + "/ping";
var assert = require('assert');
var set4G = require('../json/4G.json');

describe('设置4G', function () {
	this.timeout(40000);
	describe('设置4G网络' , function () {
		var setNet = {
			method:'POST',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            url:'http://192.168.42.129/api/network',
            body:set4G,
            json:true};
		it("set 4G success",function(done) {
            request(setNet,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                //setTimeout(done,4000);
				done();
            });
        });
	});
	describe('ping外网' , function () {
		var setPing = {
			method:'POST',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            url:pingURL,
            body:{
				"ping" : "www.baidu.com"
			},
            json:true};
		it("ping",function(done) {
            request(setPing,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                setTimeout(done,20000);
            });
        });
	});
describe('获取4G信息', function () {
    //this.timeout(40000);
	it('4G状态获取', function (done) {
		request(getifstatusURL,function(error,response,body){
		//console.log(JSON.parse(body));
		if(JSON.parse(body).types[3].strength<2) {
			console.log("信号较弱");
		} else {console.log("信号强");}
		console.log(JSON.parse(body).types[3]);
		setTimeout(done,20000);
		//console.log(JSON.parse(body).types[3].enabled);
		assert.equal(JSON.parse(body).types[3].enabled,1);
	});	
	});
});
describe('获取ping返回', function () {
    //this.timeout(40000);
	it('获取ping返回', function (done) {
		request(pingURL,function(error,response,body){
		console.log(JSON.parse(body).resptime);
		console.log('hghhhhhh')
		//console.log(JSON.parse(body).resptime);
		//setTimeout(done,4000);
		done();
	});	
	});
});
});
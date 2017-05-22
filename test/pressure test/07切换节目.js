var http = require('http');
var apiURL = "http://192.168.42.129/api";
var request = require("request");
//var expect  = require("chai").expect;
var changeVsn = apiURL + "/vsns/sources/internet/vsns/RSS_40D16E52F34F1DA4D1369F77FE71AF0A_1614.vsn/activated";
var infoURL = apiURL + "/info.json";
var assert = require('assert');
function fn(){
	var changePrograms = {
            url:'http://192.168.42.129/api/vsns/sources/internet/vsns/RSS_40D16E52F34F1DA4D1369F77FE71AF0A_1614.vsn/activated',
            method:'PUT',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{}
        };
		request(changePrograms,function (error,response,body) {
			console.log("切换节目")
		})
		request(infoURL,function(error,response,body){
		   console.log(JSON.parse(body));
		   assert.deepEqual(JSON.parse(body).info.playing.name,'RSS_40D16E52F34F1DA4D1369F77FE71AF0A_1614.vsn');
	})
}
setInterval(fn,1000);
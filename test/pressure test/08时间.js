var http = require('http');
var apiURL = "http://192.168.42.129/api";
var request = require("request");
var expect  = require("chai").expect;
var setrtcURL = apiURL + "/rtc";
var rtcURL = apiURL + "/rtc.json";
var assert = require('assert');
function fn(){
	var setrtcjs = {
            url:setrtcURL,
            method:'PUT',
            headers: {'Content-Type':'application/jsoncharset=UTF-8'},
            json:true,
            body:{
                time: "2017-1-16 17:02:02",
                timezone: "+08",
                isautotimezone: 1,
                isautotime: 0
            }
        };
		request(setrtcjs,function (error,response,body) {
			console.log("设置时间");
            console.log(setrtcjs.body);
            //console.log(setrtcjs.body.time);
            //console.log(setrtcjs.body.timezone);
            //console.log(setrtcjs.body.isautotimezone);
            //console.log(setrtcjs.body.isautotime);
		})
		request(rtcURL,function(error,response,body){
		   console.log(JSON.parse(body));
           //assert.strictEqual(setrtcjs.body,JSON.parse(body));
	})
}
setInterval(fn,1000);
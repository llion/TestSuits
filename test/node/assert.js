var http = require('http');
var apiURL = "http://192.168.42.129/api";
var getalarmRUL = apiURL + "/alarm.json";
var setalarmURL = apiURL + "/alarm";
var request = require("request");
var assert = require("assert");
var expect  = require("chai").expect;
function fn() {
	 var setalarmjs = {
            url:setalarmURL,
            method:'POST',
            json:true,
            body:{
                sleep:"09:46:00",
                wakeup:"09:47:00",
                reboot:"15:43:20"
            }
        };
	request(setalarmjs,function(error,response,body){
		console.log("haha")
		})
	request(getalarmRUL,function(error,response,body){
		var alarmtime = JSON.parse(body);
		//console.log(body);
		//console.log(alarmtime.sleepTime);
		assert.deepEqual(alarmtime.sleepTime,"09:46:00");
		assert.strictEqual(alarmtime.wakeupTime,"09:47:00");
		assert.strictEqual(alarmtime.rebootTime,"")
	})
	
	//assert.fail(JSON.parse(body).sleep,"09:46:00","","=");
};
fn();
//setInterval(fn,1000);
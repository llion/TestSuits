var http = require('http');
var apiURL = "http://192.168.42.129/api";
var getscheduleURL = apiURL + "/schedule.json";
var setscheduleURL = apiURL + "/schedule";
var request = require("request");
var expect  = require("chai").expect;
var schedule11 = require('./json/scheduleProgram.json');

function fn () { 
var setschedule = {
			method:'POST',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            url:setscheduleURL,
            body:schedule11,
            json:true};
			request(setschedule,function (error,response,body) {
				console.log("ahsbghj");
				//console.log(setschedule.body);
			request(getscheduleURL,function (error,response,body) {
                //expect(response.statusCode).to.equal(200);
				console.log(JSON.parse(body));
				console.log("哈哈")
                //setTimeout(done,1000);
            });
			});
};
fn();
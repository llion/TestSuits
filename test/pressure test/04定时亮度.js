var http = require('http');
var apiURL = "http://192.168.42.129/api";
var getbrightscheduleRUL = apiURL + "/brightschedule.json";
var setbrightscheduleURL = apiURL + "/brightschedule";
var request = require("request");
var expect  = require("chai").expect;
var assert = require("assert");
var Buffer = require("buffer");
function fn(){
	var setbrightschedulejs = {
            url:setbrightscheduleURL,
            method:'POST',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{
                interval: 60,
                schedule: [
                    {
                        brightness: 15,
                        time: "16:33:00"
                    },
                    {
                        brightness: 200,
                        time: "16:36:20"
                    },
                    {
                        brightness: 80,
                        time: "16:40:40"
                    }
                ]
            }
        };
		request(setbrightschedulejs,function (error,response,body){
			console.log("hehe")
            console.log(setbrightschedulejs.body.interval);
            console.log(setbrightschedulejs.body.schedule[0]);
            console.log(setbrightschedulejs.body.schedule[1]);
            console.log(setbrightschedulejs.body.schedule[2]);
		request(getbrightscheduleRUL,function(error,response,body){
		   console.log(JSON.parse(body));
           console.log(JSON.parse(body).interval);
           console.log(JSON.parse(body).schedule[0]);
           console.log(JSON.parse(body).schedule[1]);
           console.log(JSON.parse(body).schedule[2]);
           assert.deepEqual(setbrightschedulejs.body.interval,JSON.parse(body).interval);
           assert.deepEqual(setbrightschedulejs.body.schedule[0],JSON.parse(body).schedule[0]);
           assert.deepEqual(setbrightschedulejs.body.schedule[1],JSON.parse(body).schedule[1]);
           assert.deepEqual(setbrightschedulejs.body.schedule[2],JSON.parse(body).schedule[2]);
	});
	});
}
setInterval(fn,1000);
var http = require('http');
var apiURL = "http://192.168.42.129/api";
var getalarmRUL = apiURL + "/alarm.json";
var setalarmURL = apiURL + "/alarm";
var request = require("request");
var expect  = require("chai").expect;
var assert = require('assert');
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
    //var alarmtime = JSON.parse(body); 
    request(setalarmjs,function(error,response,body){
        console.log("haha");
        console.log(setalarmjs.body.sleep);
        console.log(setalarmjs.body.wakeup);
        console.log(setalarmjs.body.reboot);
    request(getalarmRUL,function(error,response,body){
        console.log(JSON.parse(body).sleepTime);
        console.log(JSON.parse(body).wakeupTime);
        console.log(JSON.parse(body).rebootTime);
        assert.equal(setalarmjs.body.sleep,JSON.parse(body).sleepTime);
        assert.equal(setalarmjs.body.wakeup,JSON.parse(body).wakeupTime);
        assert.equal(setalarmjs.body.reboot,JSON.parse(body).rebootTime);
    });
	});
};
setInterval(fn,1000);
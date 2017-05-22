var http = require('http');
var apiURL = "http://192.168.42.129/api";
var getalarmRUL = apiURL + "/alarm.json";
var setalarmURL = apiURL + "/alarm";
var request = require("request");
var expect  = require("chai").expect;
function fn() {
	 var getalarmjs = {
            url:getalarmRUL,
            method:'GET',
            json:true,
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            body:{
                
            }
        };
	//var alarmtime = JSON.parse(body);	
	request(getalarmRUL,function(error,res,data){
		console.log(JSON.parse(data));
	})
			
};
setInterval(fn,1000);
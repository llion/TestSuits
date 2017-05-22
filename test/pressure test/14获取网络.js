var http = require('http');
var apiURL = "http://192.168.42.129/api";
var getnetworkURL = apiURL + "/network,json";
var getifstatusURL = apiURL + "/ifstatus.json";
var request = require("request");
var assert = require('assert');
function fn() {
	request(getifstatusURL,function(error,response,body){
		//console.log(JSON.parse(body));
		if(JSON.parse(body).types[3].strength<2) {
			console.log("信号较弱");
		} else {console.log("信号强");}
		console.log(JSON.parse(body).types[3]);
		//console.log(JSON.parse(body).types[3].enabled);
		assert.equal(JSON.parse(body).types[3].enabled,1);
	});	
};
fn();
//setInterval(fn,1000);
var http = require('http');
var apiURL = "http://192.168.42.129/api";
var getterminalURL = apiURL + "/terminal.json";
var getpowerstatusURL = apiURL + "/powerstatus.json";
var getlocaleURL= apiURL + "/locale.json";
var getvolumeURL = apiURL + "/volume.json";
var getfpsURL = apiURL + "/fps.json";
var request = require("request");
var expect  = require("chai").expect;
function fn() {
	request(getpowerstatusURL,function(error,response,body){
		console.log(JSON.parse(body));
	})
	request(getterminalURL,function(error,response,body){
		console.log(JSON.parse(body));
	})
	request(getlocaleURL,function(error,response,body){
		console.log(JSON.parse(body));
	})
	request(getvolumeURL,function(error,response,body){
		console.log(JSON.parse(body));
	})
	request(getfpsURL,function(error,response,body){
		console.log(JSON.parse(body));
	})
			
};
setInterval(fn,1000);
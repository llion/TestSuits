var expect = require("chai").expect;
var http = require('http');
var request = require("request");
var apiURL = "http://192.168.42.129/api";
var infoURL = apiURL + "/info.json";
var vsnsURL = apiURL + "/vsns.json";
var getifstatusURL = apiURL + "/ifstatus.json";
var getalarmURL = apiURL + "/alarm.json";
var getterminalURL = apiURL + "/terminal.json";
var getpowerstatusURL = apiURL + "/powerstatus.json";
var getrtcURL = apiURL + "/rtc.json";
var getlocaleURL= apiURL + "/locale.json";
var getdimensionURL = apiURL + "/dimension.json";
var getsendingcardURL = apiURL + "/sendingcard.json";
var getvolumeURL = apiURL + "/volume.json";
var getbrightscheduleURL = apiURL + "/brightschedule.json";
var getinputmodeURL = apiURL + "/inputmode.json";
var getfpsURL = apiURL + "/fps.json";
var getbrightnessAndColortemp = apiURL + "/brightnessandcolortemp.json"
function fn(){
	request(infoURL,function(error,response,body){
		console.log(JSON.parse(body));
	})
	request(vsnsURL,function(error,response,body){
		console.log(JSON.parse(body));
	})
	request(getifstatusURL,function(error,response,body){
		console.log(JSON.parse(body));
	})
	request(getalarmURL,function(error,response,body){
		console.log(JSON.parse(body));
	})
	request(getterminalURL,function(error,response,body){
		console.log(JSON.parse(body));
	})
	request(getpowerstatusURL,function(error,response,body){
		console.log(JSON.parse(body));
	})
	request(getrtcURL,function(error,response,body){
		console.log(JSON.parse(body));
	})
	request(getlocaleURL,function(error,response,body){
		console.log(JSON.parse(body));
	})
	request(getdimensionURL,function(error,response,body){
		console.log(JSON.parse(body));
	})
	request(getsendingcardURL,function(error,response,body){
		console.log(JSON.parse(body));
	})
	request(getbrightscheduleURL,function(error,response,body){
		console.log(JSON.parse(body));
	})
	request(getinputmodeURL,function(error,response,body){
		console.log(JSON.parse(body));
	})
	request(getfpsURL,function(error,response,body){
		console.log(JSON.parse(body));
	})
	request(getbrightnessAndColortemp,function(error,response,body){
		console.log(JSON.parse(body));
	})
	request(getvolumeURL,function(error,response,body){
		console.log(JSON.parse(body));
	})
}
setInterval(fn,1000);
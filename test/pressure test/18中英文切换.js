var http = require('http');
var apiURL = "http://192.168.42.129/api";
var setlocale = apiURL + "/locale";
var getlocaleURL= apiURL + "/locale.json";
var request = require("request");
function fn1() {
	 var setlocalejs = {
            url:setlocale,
            method:'PUT',
            json:true,
            body:{
                "language": "en",
                "country": "US"
            }
        };
	request(setlocalejs,function(error,response,body){
		console.log("英文");
	})
	request(getlocaleURL,function(error,response,body){
		console.log(JSON.parse(body));
	})
function fn2() {
	 var setlocalejs = {
            url:setlocale,
            method:'PUT',
            json:true,
            body:{
                "language": "zh",
                "country": "CN"
            }
        };
	request(setlocalejs,function(error,response,body){
		console.log("中文");
	})
	request(getlocaleURL,function(error,response,body){
		console.log(JSON.parse(body));
	})
};
setInterval(fn2,60000);
};
fn1();

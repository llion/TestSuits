var http = require('http');
var apiURL = "http://192.168.42.129/api";
var setterminal = apiURL + "/terminal";
var getterminalURL = apiURL + "/terminal.json";
var request = require("request");
var expect  = require("chai").expect;
function fn() {
	 var setterminaljs = {
		url:setterminal,
		method:'PUT',
		json:true,
		body:{
			"name":"C4-000A",
			"leddescription":'哈哈'
		}
	};
	request(setterminaljs,function(error,response,body){
		console.log("haha")
		})
	request(getterminalURL,function(error,response,body){
		console.log(JSON.parse(body));
	})
};
setInterval(fn,1000);
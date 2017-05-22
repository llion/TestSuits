var http = require('http');
var apiURL = "http://192.168.42.129/api";
var setfps = apiURL + "/fps";
var getfpsURL = apiURL + "/fps.json";
var request = require("request");
var expect  = require("chai").expect;
var count =30;
(function fn() {
	count++
	 var setfpsjs = {
            url:setfps,
            method:'PUT',
            json:true,
            body:{
                "fps": count
            }
        };
	request(setfpsjs,function(error,response,body){
		console.log("haha")
		})
	request(getfpsURL,function(error,response,body){
		console.log(JSON.parse(body));
	})
	setTimeout(function(){fn();},40000);
	if (count = 60){
		return fn()
	}
})()

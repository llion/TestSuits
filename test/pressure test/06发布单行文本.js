var http = require("http");
var expect = require("chai").expect;
var request = require("request");
var apiURL = "http://192.168.42.129/api";
var count = 0;
var singletextURL = apiURL + "/program/singletext";
var infoURL = apiURL + "/info.json";
function fn(){
	count++;
	var singletextjs = {
            method:"POST",
            url:singletextURL,
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{
                "text":"Single line text "+count,
                "x":0,
                "y":0,
                "width":256,
                "height":256,
                "font":{
                    "name":"楷体",
                    "size":72,
                    "style":{
                        "i":0,
                        "b":1,
                        "u":0
                    },
                    "color":"0xFFFF0000"
                },
                "bgcolor":"0xFF000001",
                "scroll":{
                    "dir":"left",
                    "isconnected":0,
                    "speed":60
                }
            }
        };
		 request(singletextjs,function (error,response,body) {
			 console.log(count)
		 })
		 request(infoURL, function (error, response, body){
			 console.log(JSON.parse(body))
		 })
}
setInterval(fn,10000);




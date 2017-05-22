var http = require("http");
var request = require("request");
var apiURL = "http://192.168.42.129/api";
var singletextURL = apiURL + "/program/singletext";
var count = 0;
function fn(){
	count ++;
	var singletextjs = {
            method:"POST",
            url:singletextURL,
            json:true,
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            body:
			{
                "text":"仿宋Single Line!"+count,
                "x":0,
                "y":0,
                "width":256,
                "height":256,
                "font":{
                    "name":"仿宋",
                    "size":72,
                    "style":{
                        "i":0,
                        "b":1,
                        "u":0
                    },
                    "color":"0xFFFF0000"
                },
                "bgcolor":"0xFF000001",
                "IsScroll":"0",
                "IsScrollByTime":"0",
                "MultiPicInfo":{
                    "OnePicDuration":"2000"
                }
            }
        };
            request(singletextjs,function (error,response,body) {
				console.log("singletext"+count)
               //console.log(JSON.toString(body));
            });
        };
setInterval(fn,1000);

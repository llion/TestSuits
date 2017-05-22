var http = require('http');
var apiURL = "http://192.168.42.129/api";
var getvolumeURL = apiURL + "/volume.json";
var setvolume = apiURL + "/volume";
var request = require("request");
var expect  = require("chai").expect;
var count = 0;
function fn() {
	count++
	 var setvolumejs = {
            url:setvolume,
            method:'PUT',
            json:true,
            body:{
                "musicvolume":count
            }
        };
	request(setvolumejs,function(error,response,body){
		console.log("haha")
		})
	request(getvolumeURL,function(error,response,body){
		console.log(JSON.parse(body));
	})
	/* if (count=15){
		var count =0;
		return count;
	} */
};
setInterval(fn,1000);
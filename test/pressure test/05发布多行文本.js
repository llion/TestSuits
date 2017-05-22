var http = require("http");
var expect = require("chai").expect;
var request = require("request");
var apiURL = "http://192.168.42.129/api";
var count = 0;
function fn1(count=0) {
	var count =count ;
    var MultitextURL = apiURL + "/program/new"+count+".vsn";
	return MultitextURL;
}
var infoURL = apiURL + "/info.json";
function fn(){
	var MultitextURL = fn1(count);;
	count++;
	var Multitextjs = {
            method:"POST",
            url:MultitextURL,
            json:true,
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            body:{
              "Programs": {
                "Program": {
                  "Pages": [{
                      "Regions": [
                          {
                            "Rect": {
                              "X": "0",
                              "Y": "0",
                              "Width": "256",
                              "Height": "128"
                            },
                            "Items": [{
                                "Type": "5",
                                "Text" : "Multi line text test"+count,
                                "IsScroll": "1"
                            }]
                          },
                          {
                            "Rect": {
                              "X": "0",
                              "Y": "128",
                              "Width": "256",
                              "Height": "128"
                            },
                            "Items": [{
                                "Type": "5",
                                "Text": "Multi line text test"+count,
                                "LogFont": {
                                  "lfHeight": "36",
                                  "lfWidth": "0"
                                }
                            }]
                          }            
                        ]
                    }]
                }
              }
            }
        };
		console.log(count);
		 request(Multitextjs,function (error,response,body) {
			 console.log("oo")
		 })
		 request(infoURL, function (error, response, body){
			 console.log(JSON.parse(body))
		 })
}
setInterval(fn,3000);


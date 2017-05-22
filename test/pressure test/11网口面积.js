var http = require('http');
var apiURL = "http://192.168.42.129/api";
var getsendingcard = apiURL + "/sendingcard.json";
var setsendingcardURL = apiURL + "/sendingcard";
var request = require("request");
var expect  = require("chai").expect;
var assert = require('assert');
var count = 0;
function fn(count){
//function fn(){
	//var count = count;
	count ++;
	var setsendingcardjs = {
            url:setsendingcardURL,
            method:'PUT',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{
                dimension: {
                    height: 0,
                    width: 0
                },
                frameflavor: {
                    isinterlaced: 0
                },
                netareas: [
                    {
                        height: 255+count,
                        startx: 0,
                        starty: 0,
                        width: 255+count
                    },
                    {
                        height: 128,
                        startx: 0,
                        starty: 512,
                        width: 1280
                    }
                ]
            }
        };
		console.log(count);
		request(setsendingcardjs,function (error,response,body) {
			console.log("设置网口面积");
		})
		request(getsendingcard,function(error,response,body){
		   console.log(JSON.parse(body));
           assert.deepEqual(JSON.parse(body).netareas[0],setsendingcardjs.body.netareas[0]);
	})
}
fn(count)
//setInterval(fn,1000)
//setInterval(function(){fn(count);count+=1},3000);
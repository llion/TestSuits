var http = require("http");
var apiURL = "http://192.168.42.129/api";
var setdimensionURL = apiURL + "/dimension";
var getdimensionURL = apiURL + "/dimension.json";
var expect = require("chai").expect;
var request = require("request");
var assert = require('assert');
	var w = 64;
	var h = 128;
(
function fn(){
	//this.timeOut(47000);
		   //w += 16;
		   //h += 8;
	//console.log(count);;

w+=16;
h+=8;
	var setdimensionjs = {
            url:setdimensionURL,
            method:"PUT",
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{width:w,height:h,hsync:0,dclk:0}
        };
		if(setdimensionjs){
		request(setdimensionjs,function (error,response,body) {
			console.log("分辨率")
		});
}
		if(getdimensionURL){
	request(getdimensionURL,function(error,response,body){
		   console.log(JSON.parse(body));
		   assert.strictEqual(JSON.parse(body).real_height,setdimensionjs.body.height);
		   assert.strictEqual(JSON.parse(body).real_width,setdimensionjs.body.width);
			//count++
			});
}
		console.log(w);
		console.log(h);
		//setTimeout(function(){fn();},40000);
		//return w;
		//return h;
		
}
)()
//setTimeout(function(){fn(w,h),w+=16,h+=8},40000)
//fn();
//setInterval(fn,50000);
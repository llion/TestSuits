var http = require('http');
var apiURL = "http://192.168.42.129/api";
var changecaction = apiURL + "/action";
var request = require("request");
function fn1() {
	 var changestatus = {
            url:changecaction,
            method:'POST',
            json:true,
            body:{
                "command":"sleep"
            }
        };
	request(changestatus,function(error,response,body){
		console.log("sleep")
		})
		
};
setInterval(function(){fn2();},3000);
function fn2() {
	 var changestatus = {
				url:changecaction,
				method:'POST',
				json:true,
				body:{
					"command":"wakeup"
            }
        };
	request(changestatus,function(error,response,body){
		console.log("wakeup")
		})
			
};
setInterval(function(){fn1();},3000);
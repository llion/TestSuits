var http = require('http');
var apiURL = "http://192.168.42.129/api";
var setnetworkURL = apiURL + "/network.json";
var getifstatusURL = apiURL + "/ifstatus.json";
var request = require("request");
function fn() {
	 var setnetwork = {
            method:'POST',
            url:'http://192.168.42.129/api/network',
			json:true,
            body:{
              "types": [
                {
                  "SSID": "dd-wrt-01-2.4G",
                  "ips": {},
                  "pass": "180380580",
                  "type": "wifi",
                  "channel": 0,
                  "enabled": 0,
                  "isstatic": 0
                },
                {
                  "dns1": "",
                  "dns2": "",
                  "ips": {
					  "ethernet_static_netmask":"255.255.255.0",
					  "ethernet_static_gateway":"192.168.1.1",       //这是设置自动获取IP
					  "ethernet_use_static_ip":0,
					  "ethernet_on":0 
                    /* "gateway": "192.168.1.1",
                    "ip": "192.168.1.34",
                    "mask": "255.255.255.0" */
                  },
                  "type": "lan",
                  "channel": 0,
                  "enabled": 0,
                  "isstatic": 0
                },
                {
                  "SSID": "c6-0289",
                  "ips": {},
                  "pass": "123456789",
                  "type": "wifi ap",
                  "channel": 120,
                  "enabled": 1,
                  "isstatic": 0
                },
                {
                  "SSID": "",
                  "dns1": "",
                  "dns2": "",
                  "mac": "",
                  "pass": "",
                  "type": "4G",
                  "channel": 0,
                  "enabled": 0,
                  "isstatic": 0
                }
              ]
            }
	 }
	request(setnetwork,function(error,response,body){
		console.log("haha")
		})
	request(getifstatusURL,function(error,response,body){
    setTimeout(function(){
        console.log(JSON.parse(body));;
      },3000);
	})
};
setInterval(fn,1000);
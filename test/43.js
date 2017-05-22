var http = require("http");
var expect = require("chai").expect;
var request = require("request");
var apiURL = "http://192.168.42.129/api";
var getdimensionURL = apiURL + "/dimension.json";

    describe("读取分辨率",function () {
        it("分辨率回读为512x256",function (done) {
           	request(getdimensionURL,function(error,response,body){
				console.log(JSON.parse(body));
				done();
				});
            });
        });
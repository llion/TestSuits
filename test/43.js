var http = require("http");
var expect = require("chai").expect;
var request = require("request");
var apiURL = "http://192.168.42.129/api";
var getdimensionURL = apiURL + "/dimension.json";

    describe("��ȡ�ֱ���",function () {
        it("�ֱ��ʻض�Ϊ512x256",function (done) {
           	request(getdimensionURL,function(error,response,body){
				console.log(JSON.parse(body));
				done();
				});
            });
        });
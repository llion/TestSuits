var expect  = require("chai").expect;
var request = require("request");
var fs = require("fs");

var serverIP = "192.168.42.129";
var apiURL = "http://" + serverIP;
var serverURL = "http://" + serverIP;
var apiURL = serverURL + "/api";
var dimensionURL = apiURL + "/dimension.json";
var screenshotURL = serverURL + "/transmission/ftp/config";
var infoURL = apiURL + "/info.json";
var powerstatusURL = apiURL + "/powerstatus.json";

describe("get info", function() {

    describe("get powerstatus = 1 开机",function () {
        it("return powerstatus 200",function (done) {
            request(powerstatusURL,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it("powerstatus = 1 开机",function(done) {
            request(powerstatusURL,function (error, response, body) {

                var powerstatus1 = JSON.parse(body);
                console.log(powerstatus1);
                expect(powerstatus1.powerstatus).to.equal(1);
                done();
            });
        });
    });

});

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
var rtcURL = apiURL + "/rtc.json";
var localeURL = apiURL + "/locale.json";
var volumeURL = apiURL + "/volume.json";

describe("get info", function() {

    describe("get info of version", function () {

        var url = infoURL;

        it("returns status 200", function (done) {
            request(url, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });


        it("get version = 1.29.09", function (done) {
            request(url, function (error, response, body) {
                console.log(body);
                var result = JSON.parse(body);
                expect(result.info.vername).to.equal('1.29.09');
                console.log(body.time);
                done();
            });
        });


        it("get vsn name = new.vsn", function (done) {
            request(url, function (error, response, body) {
                //console.log(body);
                var result = JSON.parse(body);

                expect(result.info.playing.name).to.equal("new.vsn");
                //expect(result.real_width).to.equal(512);
                //console.log(body.time)
                done();
            });
        });
    });
});
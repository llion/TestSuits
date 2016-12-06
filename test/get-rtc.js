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

    describe("get info of version", function() {

        var url = infoURL;

        it("returns status 200", function(done) {
            request(url, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });


        it("get version = 1.29.09", function(done) {
            request(url, function(error, response, body) {
                console.log(body);
                var result = JSON.parse(body);
                expect(result.info.vername).to.equal('1.29.09');
                console.log(body.time);
                done();
            });
        });



        it("get vsn name = new.vsn", function(done) {
            request(url, function(error, response, body) {
                //console.log(body);
                var result = JSON.parse(body);

                expect(result.info.playing.name).to.equal("new.vsn");
                //expect(result.real_width).to.equal(512);
                //console.log(body.time)
                done();
            });
        });
    });


    describe("get powerstatus = 1 开机",function () {
        it("return powerstatus 200",function (done) {
            request(powerstatusURL,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it("powerstatus = 1 开机",function (done) {
            request(powerstatusURL,function (error,response,body) {
                console.log(body);
                var powerstatuskev = JSON.parse(body);

                expect(powerstatuskev.powerstatus).to.equal(1);
                done();
            });

        });

    });

    describe("get rtc timezone",function () {
        it("return timezone 200",function (done) {
            request(rtcURL,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it("timezone : 8",function (done) {
            request(rtcURL,function (error,response,body) {
                console.log(body);
                var rtckev = JSON.parse(body);

                expect(rtckev.timezone).to.equal("+08");
                done();
            });

        });
    });

    describe("get language",function () {
        it("return locale 200",function (done) {
            request(localeURL,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it("locale : zh",function (done) {
            request(localeURL,function (error,response,body) {
                console.log(body);
                var languagekev = JSON.parse(body);

                expect(languagekev.language).to.equal("zh");
                done();
            });
        });
    });

    describe("get dimension", function() {
        var url = dimensionURL;
        it("returns status 200", function(done) {
            request(url, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it("dimension 1280x512 fps:60", function(done) {
            request(url, function(error, response, body) {
                console.log(body);
                var result = JSON.parse(body);

                expect(result.real_height).to.equal(256);
                expect(result.real_width).to.equal(512);
                expect(result.fps).to.equal(60);
                //console.log(body.time)
                done();
            });
        });
    });

    describe("get volume",function () {
        it("musicvolume:40",function (done) {
            request(volumeURL,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it("musicVolume = 40",function (done) {
            request(volumeURL,function (error,response,body) {
                console.log(body);
                var volumekev = JSON.parse(body);
                expect(volumekev.musicvolume).to.equal(6);
                done();
            });
        });
    });


});
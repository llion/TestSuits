var http = require("http");
var expect = require("chai").expect;
var request = require("request");
var apiURL = "http://192.168.42.129/api";
var MultitextURL = apiURL + "/program/new.vsn";
var infoURL = apiURL + "/info.json";

describe("多行文本节目发布",function () {
    this.timeout(14000);
    describe("多行文本测试",function () { 
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
                                "Text" : "Multi line text test",
                                "IsScroll": "1",
								"LogFont": {
                                  "lfHeight": "36",
                                  "lfWidth": "0",
								  "lfItalic": "1"
                                }
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
                                "Text": "Multi line text test",
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

        it("发布多行文本",function (done) {
            request(Multitextjs,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                setTimeout(done,3000);
            });
        });
    });
	
	describe("多行文本测试",function () { 
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
                                "Text" : "Multi line text test",
                                "IsScroll": "1",
								"LogFont": {
                                  "lfHeight": "128",
                                  "lfWidth": "0",
								  "lfItalic": "1"
                                }
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
                                "Text": "Multi line text test",
                                "LogFont": {
                                  "lfHeight": "128",
                                  "lfWidth": "0",
								  "lfItalic": "1"
                                }
                            }]
                          }            
                        ]
                    }]
                }
              }
            }
        };

        it("发布多行文本",function (done) {
            request(Multitextjs,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                setTimeout(done,3000);
            });
        });
    });
	
	describe("多行文本测试",function () { 
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
                              "Height": "256"
                            },
                            "Items": [{
                                "Type": "5",
                                "Text" : "多行文本上移",
                                "IsScroll": "1",
								"Speed": "100",
								"LogFont": {
                                  "lfHeight": "192",
                                  "lfWidth": "0",
								  "lfItalic": "1"
                                }
                            }]
                          },         
                        ]
                    }]
                }
              }
            }
        };

        it("发布多行文本",function (done) {
            request(Multitextjs,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                setTimeout(done,3000);
            });
        });
    });
	
	describe("多行文本测试",function () { 
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
                              "Height": "256"
                            },
                            "Items": [{
                                "Type": "5",
                                "Text": "多行文本翻页",
								"IsScroll": "1",
                                "LogFont": {
                                  "lfHeight": "128",
                                  "lfWidth": "0",
								  "lfItalic": "1"
                                }
                            }]
                          }            
                        ]
                    }]
                }
              }
            }
        };

        it("发布多行文本",function (done) {
            request(Multitextjs,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                setTimeout(done,3000);
            });
        });
    });

    describe("获取正在播放节目", function () {
        it("正在播放new.vsn", function (done) {
            request(infoURL, function (error, response, body) {
                var result = JSON.parse(body);
                expect(result.info.playing.name).to.equal("new.vsn");
                setTimeout(done,2000);
            });
        });
    });
});
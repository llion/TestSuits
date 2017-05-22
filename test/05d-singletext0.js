var http = require("http");
var expect = require("chai").expect;
var request = require("request");
var apiURL = "http://192.168.42.129/api";
var singletextURL = apiURL + "/program/singletext";


describe("单行文本节目发布",function () {
	//this.timeout(5000);
    describe("单行文本测试",function () {
        var singletextjs = {
            method:"POST",
            url:singletextURL,
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{
                "text":"单行文本",
                "x":0,
                "y":0,
                "width":256,
                "height":256,
                "font":{
                    "name":"楷体",
                    "size":128,
                    "style":{
                        "i":1,
                        "b":0,
                        "u":0
                    },
                    "color":"0xFFFF0000"
                },
                "bgcolor":"0xFF000001",
                "scroll":{
                    "dir":"left",
                    "isconnected":0,
                    "speed":180
                }
            }
        };

        it("发布单行文本",function (done) {
            request(singletextjs,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                //setTimeout(done,5000);
				done();
            });
        });
    });
	
	    describe("单行文本测试",function () {
        var singletextjs = {
            method:"POST",
            url:singletextURL,
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{
                "text":"单行文本",
                "x":0,
                "y":0,
                "width":256,
                "height":256,
                "font":{
                    "name":"黑体",
                    "size":128,
                    "style":{
                        "i":0,
                        "b":0,
                        "u":1
                    },
                    "color":"0xFFFF0000"
                },
                "bgcolor":"0xFF000F01",
                "scroll":{
                    "dir":"left",
                    "isconnected":0,
                    "speed":120
                }
            }
        };

        it("发布单行文本",function (done) {
            request(singletextjs,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                //setTimeout(done,5000);
				done();
            });
        });
    });
	
	    describe("单行文本测试",function () {
        var singletextjs = {
            method:"POST",
            url:singletextURL,
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{
                "text":"单行文本",
                "x":0,
                "y":0,
                "width":256,
                "height":256,
                "font":{
                    "name":"楷体",
                    "size":128,
                    "style":{
                        "i":0,
                        "b":1,
                        "u":0
                    },
                    "color":"0xFFFF0000"
                },
                "bgcolor":"0xFFFFF001",
                "scroll":{
                    "dir":"left",
                    "isconnected":0,
                    "speed":180
                }
            }
        };

        it("发布单行文本",function (done) {
            request(singletextjs,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                //setTimeout(done,5000);
				done();
            });
        });
    });
	
	    describe("单行文本测试",function () {
        var singletextjs = {
            method:"POST",
            url:singletextURL,
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{
                "text":"单行文本",
                "x":0,
                "y":0,
                "width":256,
                "height":256,
                "font":{
                    "name":"楷体",
                    "size":192,
                    "style":{
                        "i":1,
                        "b":0,
                        "u":0
                    },
                    "color":"0xFFFF0000"
                },
                "bgcolor":"0xFF000001",
                "scroll":{
                    "dir":"left",
                    "isconnected":0,
                    "speed":180
                }
            }
        };

        it("发布单行文本",function (done) {
            request(singletextjs,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                //setTimeout(done,5000);
				done();
            });
        });
    });
	
	    describe("单行文本测试",function () {
        var singletextjs = {
            method:"POST",
            url:singletextURL,
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{
                "text":"单行文本SSH远程连接VMware虚拟机中Linux系统，涉及两台物理机，我本身的情况是一台PC，一台win 2012服务器，将VMware装在服务器上，现在使用putty远程连接VMware中Ubuntu。",
                "x":0,
                "y":0,
                "width":256,
                "height":256,
                "font":{
                    "name":"楷体",
                    "size":64,
                    "style":{
                        "i":1,
                        "b":1,
                        "u":1
                    },
                    "color":"0xFF000000"
                },
                "bgcolor":"0xFFFF0001",
                "scroll":{
                    "dir":"left",
                    "isconnected":0,
                    "speed":180
                }
            }
        };

        it("发布单行文本",function (done) {
            request(singletextjs,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                //setTimeout(done,5000);
				done();
            });
        });
    });
	
	    describe("单行文本测试",function () {
        var singletextjs = {
            method:"POST",
            url:singletextURL,
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{
                "text":"scp -r /home/yiibai/scripts/ yiibai@192.168.0.174:/home/yiibai/",
                "x":0,
                "y":0,
                "width":256,
                "height":256,
                "font":{
                    "name":"default",
                    "size":128,
                    "style":{
                        "i":1,
                        "b":0,
                        "u":0
                    },
                    "color":"0xFFFF0000"
                },
                "bgcolor":"0xFF000001",
                "scroll":{
                    "dir":"left",
                    "isconnected":0,
                    "speed":300
                }
            }
        };

        it("发布单行文本",function (done) {
            request(singletextjs,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                //setTimeout(done,5000);
				done();
            });
        });
    });
});
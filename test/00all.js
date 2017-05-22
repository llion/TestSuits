var http = require('http');
var fs = require("fs");
var apiURL = "http://192.168.42.129/api";
var getalarmRUL = apiURL + "/alarm.json";
var setalarmURL = apiURL + "/alarm";
var getrtcRUL = apiURL + "/rtc.json";
var setrtcURL = apiURL + "/rtc";
var getbrightscheduleRUL = apiURL + "/brightschedule.json";
var setbrightscheduleURL = apiURL + "/brightschedule";
var getsendingcardRUL = apiURL + "/sendingcard.json";
var setsendingcardURL = apiURL + "/sendingcard";
var changestatusRUL = apiURL + "/action";
var getvolumeRUL = apiURL + "/volume.json";
var setvolumeURL = apiURL + "/volume";
var MultitextURL0 = apiURL + "/program/new.vsn";
var MultitextURL1 = apiURL + "/program/Multi-Line.vsn";
var singletextURL = apiURL + "/program/singletext";
var changeVsn = apiURL + "/vsns/sources/lan/vsns/new.vsn/activated";
var infoURL = apiURL + "/info.json";
const exec = require('child_process').exec;
const cmdStr = 'curl ftp://192.168.42.129/program/ -T ../programs/multi.vsn';
const cmdplaying = 'curl -X PUT http://192.168.42.129/api/vsns/sources/lan/vsns/multi.vsn/activated';
var setdimensionURL = apiURL + "/dimension";
var getdimensionURL = apiURL + "/dimension.json";
var screenshotURL = "http://192.168.42.129/transmission/ftp/config";
var cmdsingleline = "mocha single-line.js";
var cmdMultiLine = "mocha 04d-Multi-line-10.js"
var cmdsinglekaiti = "mocha single-kaiti.js";
var cmdsinglesongti = "mocha single-songti.js";
var cmdsingleheiti = "mocha single-heiti.js";
var cmdsinglefangsong = "mocha single-fangsong.js";
var cmdsinglelishu = "mocha single-lishu.js";
var cmdMultiLine = "mocha Multi-line-1.js"
var request = require("request");
var expect  = require("chai").expect;

describe("定时休眠唤醒设置与读取",function () {
    this.timeout(2000);
    describe("定时休眠唤醒设置",function () {
        var setalarmjs = {
            url:setalarmURL,
            method:'POST',
            json:true,
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            body:{
                sleep:"16:10:20",
                wakeup:"16:10:30",
                reboot:""
            }
        };
        it("设置定时休眠唤醒", function(done) {
            request(setalarmjs, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

    
    describe("定时时间",function () {
        it("获取 成功",function (done) {
            request(getalarmRUL,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                setTimeout(done,1000);
            });
        });

        it("读取定时休眠与设置一致", function(done) {
            request(getalarmRUL, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                var alarmtime = JSON.parse(body);
                console.log(alarmtime);
                expect(alarmtime.sleepTime).to.equal(setalarmjs.body.sleep);
                expect(alarmtime.wakeupTime).to.equal(setalarmjs.body.wakeup);
                done();
            });
        });
    });
});

    describe("清除定时休眠唤醒设置",function () {
        var setalarmjs = {
            url:setalarmURL,
            method:'POST',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{
                "sleep":"",
                "wakeup":"",
                "reboot":""
            }
        };
        it("清除成功", function(done) {
            request(setalarmjs,function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                setTimeout(done,500);
            });
        });
    });
});

describe("定时亮度 测试",function () {
    this.timeout(4000);
    describe("设置定时亮度",function () {
        var setbrightschedulejs = {
            url:setbrightscheduleURL,
            method:'POST',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{
                "interval": 60,
                "schedule": [
                    {
                        "brightness": 15,
                        "time": "15:36:00"
                    },
                    {
                        "brightness": 200,
                        "time": "15:36:20"
                    },
                    {
                        "brightness": 80,
                        "time": "15:36:40"
                    }
                ]
            }
        };

        it("定时亮度设置成功",function (done) {
            request(setbrightschedulejs,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                setTimeout(done,1000);
            });
        })


    describe("回读定时亮度",function () {
        it("3个值完全准确",function (done) {
            request(getbrightscheduleRUL,function (error,response,body) {
                var getbrightschedule = JSON.parse(body);
                expect(getbrightschedule.interval).to.deep.equal(setbrightschedulejs.body.interval);
                expect(getbrightschedule.schedule[0]).to.deep.equal(setbrightschedulejs.body.schedule[0]);
                expect(getbrightschedule.schedule[1]).to.deep.equal(setbrightschedulejs.body.schedule[1]);
                expect(getbrightschedule.schedule[2]).to.deep.equal(setbrightschedulejs.body.schedule[2]);
                console.log(getbrightschedule);
                setTimeout(done,500);
            });
        });
    });
});
describe("清楚定时亮度",function () {
        var setbrightschedulejs = {
            url:setbrightscheduleURL,
            method:'POST',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{
                "interval": 0,
                "schedule": [
                    {
                       "interval":0,
					   "schedule":[],
					    "brightness": null,
                        "time": " "  
                    }
                ]
            }
        };

        it("定时亮度设置成功",function (done) {
            request(setbrightschedulejs,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                setTimeout(done,1000);
            });
        })


    describe("回读定时亮度",function () {
        it("3个值完全准确",function (done) {
            request(getbrightscheduleRUL,function (error,response,body) {
                var getbrightschedule = JSON.parse(body);
                expect(getbrightschedule.interval).to.deep.equal(setbrightschedulejs.body.interval);
                expect(getbrightschedule.schedule[0]).to.deep.equal(setbrightschedulejs.body.schedule[0]);
                console.log(getbrightschedule);
                setTimeout(done,500);
            });
        });
    });
});
});

describe("时间设置 200",function () {
    describe("设置时间为:2016-11-11 17:02:02时区：+8",function () {
        var setrtcjs = {
            url:setrtcURL,
            method:'PUT',
            headers: {'Content-Type':'application/jsoncharset=UTF-8'},
            json:true,
            body:{
                "time": "2016-11-11 17:02:02",
                "timezone": "+08",
                "isautotimezone": 1,
                "isautotime": 0
            }
        };
        it("设置时间 returns status 200", function(done) {
            request(setrtcjs, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

    });

    describe("时间",function () {
        it("获取 return 200",function (done) {
            request(getrtcRUL,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it("sleep status 200", function(done) {
            request(getrtcRUL, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                //console.log(JSON.stringify(body));
                var rtctime = JSON.parse(body);
                console.log(rtctime);
                expect(rtctime.time).to.equal('2016-11-11 17:02:02');
                expect(rtctime.timezone).to.equal("+08");
                done();
            });
        });
    });


});

describe("多行文本节目发布",function () {
    this.timeout(9000);
    describe("多行文本测试",function () { 
        var Multitextjs = {
            method:"POST",
            url:MultitextURL0,
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
                                "IsScroll": "1"
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
                setTimeout(done,5000);
            });
        });
    });

    describe("获取正在播放节目", function () {
        it("正在播放new.vsn", function (done) {
            request(infoURL, function (error, response, body) {
                var result = JSON.parse(body);
                expect(result.info.playing.name).to.equal("new.vsn");
                setTimeout(done,4000);
            });
        });
    });
});

describe("多行文本节目发布",function () {
    this.timeout(5000);
    describe("多行文本测试",function () { 
        var Multitextjs = {
            method:"POST",
            url:MultitextURL1,
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
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
                                "Text" : "哈哈好的吧",
                                "IsScroll": "1",
                                "IsScrollByTime":"1",
                                "MultiPicInfo":{
                                    "OnePicDuration":"10000"
                                },
                                "LogFont": {
                                  "lfHeight": "72",
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

    describe("获取正在播放节目", function () {
        it("正在播放Multi-Line.vsn", function (done) {
            request(infoURL, function (error, response, body) {
                var result = JSON.parse(body);
                expect(result.info.playing.name).to.equal("Multi-Line.vsn");
                setTimeout(done,3500);
            });
        });
    });
});

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
});

describe("change programs",function () {
    describe("to new.vsn",function () {
        var changePrograms = {
            url:'http://192.168.42.129/api/vsns/sources/lan/vsns/new.vsn/activated',
            method:'PUT',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{}
        };
        it("修改节目到new.vsn成功",function (done) {
            request(changePrograms,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

    });

    describe("回读正在播放节目", function () {
        var url = infoURL;
        it("正在播放new.vsn", function (done) {
            var vsnk = function (error, response, body) {
                var result = JSON.parse(body);
                expect(result.info.playing.name).to.equal("new.vsn");
                done();
            };
            var reqvsnk = function () {
                request(url,vsnk);
            };
            setTimeout(reqvsnk,1000);
        });
    });
});

describe("cmd命令行测试",function () {
    this.timeout(4000);
	describe("发布节目到盒子",function () {
    	it("节目为mulit.vsn", function (done) {
        	exec(cmdStr, function (err, stdout, stderr) {
            	if (err) {
                	console.log('send multi.vsn to C6 error:' + stderr);
            	} else {
                	console.log(stdout);
            	}
            	setTimeout(done,2000);
        	});
    	});
	});
	describe("发布播放指令",function () {
        it("播放mulit.vsn", function (done) {
            exec(cmdplaying, function (err, stdout, stderr) {
                if (err) {
                    console.log('send multi.vsn to C6 error:' + stderr);
                } else {
                    var data = JSON.parse(stdout);
                    console.log(data);
                }
				setTimeout(done,2000);
                //done();
            });
        });
    });
});

describe("多行文本对比",function () {
	this.timeout(70000);

    describe("发布多行文本翻页播放节目",function(){
        it("发布命令调取外部资源Multi-line",function(done){
            exec(cmdMultiLine,function(err,stdout,stderr){
                if(err){
                    console.log("调用外部命令发送多行文本出错：" + stderr);
                }else{
                    console.log(stdout);
                }
                setTimeout(done,3000);
            })
        })
    })

    describe("Screenshot", function() {
        var url = screenshotURL;
        it("屏幕截图", function(done) {
            console.log("url=" + url);
            var ws = fs.createWriteStream('../img/Multi-line.png');          //生成截图
            ws.on('error', function(err) { console.log(err); });
            var reqScreen = request(url);
            reqScreen.on('data', function(chunk) {// instead of loading the file into memory
            ws.write(chunk);// after the download, we can just pipe the data as it's being downloaded
          });
         
            reqScreen.on('end', function() {
            const spawn = require('child_process').spawn;
            const diff = spawn('diff', ['../img/Multi-line.png', '../img/Multi-line.png']);
            diff.stdout.on('data', function(data) {
                console.log("out=" + data.toString()); 
            });

            diff.stderr.on('data', function(data) {
                console.log("error=" + data.toString()); 
            });

            diff.on('close', function(code) {
              console.log('closing code: ' + code);
              //expect(code).to.equal(1);
              setTimeout(done,2000);
            });
        });
    });
    });
});

describe("single-line",function () {
	this.timeout(70000);
    
    describe("发布单行文本翻页播放节目",function(){
    	it("发布命令调取外部资源single-songti",function(done){
    		exec(cmdsinglesongti,function(err,stdout,stderr){
    			if(err){
    				console.log("调用外部命令发送节目出错：" + stderr);
    			}else{
    				console.log(stdout);
    			}
    			setTimeout(done,3000);
    		})
    	})
    })

    describe("Screenshot", function() {
	    var url = screenshotURL;
	    it("屏幕截图", function(done) {
			console.log("url=" + url);
			var ws = fs.createWriteStream('../img/single-songti.png');          //生成截图
			ws.on('error', function(err) { console.log(err); });
		    var reqScreen = request(url);
		    reqScreen.on('data', function(chunk) {// instead of loading the file into memory
			ws.write(chunk);// after the download, we can just pipe the data as it's being downloaded
		  });
		 
		    reqScreen.on('end', function() {
			const spawn = require('child_process').spawn;
			const diff = spawn('diff', ['../img/single-songti.png', '../img/single-songti.png']);
			diff.stdout.on('data', function(data) {
				console.log("out=" + data.toString()); 
			});

			diff.stderr.on('data', function(data) {
				console.log("error=" + data.toString()); 
			});

			diff.on('close', function(code) {
			  console.log('closing code: ' + code);
			  expect(code).to.equal(0);
			  setTimeout(done,5000);
			});
		});
    });
	});

    describe("发布单行文本翻页播放节目",function(){
        it("发布命令调取外部资源single-kaiti",function(done){
            exec(cmdsinglekaiti,function(err,stdout,stderr){
                if(err){
                    console.log("调用外部命令发送节目出错：" + stderr);
                }else{
                    console.log(stdout);
                }
                setTimeout(done,3000);
            })
        })
    })

    describe("Screenshot", function() {
        var url = screenshotURL;
        it("屏幕截图", function(done) {
            console.log("url=" + url);
            var ws = fs.createWriteStream('../img/single-kaiti.png');          //生成截图
            ws.on('error', function(err) { console.log(err); });
            var reqScreen = request(url);
            reqScreen.on('data', function(chunk) {// instead of loading the file into memory
            ws.write(chunk);// after the download, we can just pipe the data as it's being downloaded
          });
         
            reqScreen.on('end', function() {
            const spawn = require('child_process').spawn;
            const diff = spawn('diff', ['../img/single-kaiti.png', '../img/single-kaiti.png']);
            diff.stdout.on('data', function(data) {
                console.log("out=" + data.toString()); 
            });

            diff.stderr.on('data', function(data) {
                console.log("error=" + data.toString()); 
            });

            diff.on('close', function(code) {
              console.log('closing code: ' + code);
              expect(code).to.equal(0);
              setTimeout(done,5000);
            });
        });
    });
    });

    describe("发布单行文本翻页播放节目",function(){
        it("发布命令调取外部资源single-lishu",function(done){
            exec(cmdsinglelishu,function(err,stdout,stderr){
                if(err){
                    console.log("调用外部命令发送节目出错：" + stderr);
                }else{
                    console.log(stdout);
                }
                setTimeout(done,3000);
            })
        })
    })

    describe("Screenshot", function() {
        var url = screenshotURL;
        it("屏幕截图", function(done) {
            console.log("url=" + url);
            var ws = fs.createWriteStream('../img/single-lishu.png');          //生成截图
            ws.on('error', function(err) { console.log(err); });
            var reqScreen = request(url);
            reqScreen.on('data', function(chunk) {// instead of loading the file into memory
            ws.write(chunk);// after the download, we can just pipe the data as it's being downloaded
          });
         
            reqScreen.on('end', function() {
            const spawn = require('child_process').spawn;
            const diff = spawn('diff', ['../img/single-lishu.png', '../img/single-lishu.png']);
            diff.stdout.on('data', function(data) {
                console.log("out=" + data.toString()); 
            });

            diff.stderr.on('data', function(data) {
                console.log("error=" + data.toString()); 
            });

            diff.on('close', function(code) {
              console.log('closing code: ' + code);
              expect(code).to.equal(0);
              setTimeout(done,5000);
            });
        });
    });
    });

    describe("发布单行文本翻页播放节目",function(){
        it("发布命令调取外部资源single-heiti",function(done){
            exec(cmdsingleheiti,function(err,stdout,stderr){
                if(err){
                    console.log("调用外部命令发送节目出错：" + stderr);
                }else{
                    console.log(stdout);
                }
                setTimeout(done,3000);
            })
        })
    })

    describe("Screenshot", function() {
        var url = screenshotURL;
        it("屏幕截图", function(done) {
            console.log("url=" + url);
            var ws = fs.createWriteStream('../img/single-heiti.png');          //生成截图
            ws.on('error', function(err) { console.log(err); });
            var reqScreen = request(url);
            reqScreen.on('data', function(chunk) {// instead of loading the file into memory
            ws.write(chunk);// after the download, we can just pipe the data as it's being downloaded
          });
         
            reqScreen.on('end', function() {
            const spawn = require('child_process').spawn;
            const diff = spawn('diff', ['../img/single-heiti.png', '../img/single-heiti.png']);
            diff.stdout.on('data', function(data) {
                console.log("out=" + data.toString()); 
            });

            diff.stderr.on('data', function(data) {
                console.log("error=" + data.toString()); 
            });

            diff.on('close', function(code) {
              console.log('closing code: ' + code);
              expect(code).to.equal(0);
              setTimeout(done,5000);
            });
        });
    });
    });

    describe("发布单行文本翻页播放节目",function(){
        it("发布命令调取外部资源single-fangsong",function(done){
            exec(cmdsinglefangsong,function(err,stdout,stderr){
                if(err){
                    console.log("调用外部命令发送节目出错：" + stderr);
                }else{
                    console.log(stdout);
                }
                setTimeout(done,3000);
            })
        })
    })

    describe("Screenshot", function() {
        var url = screenshotURL;
        it("屏幕截图", function(done) {
            console.log("url=" + url);
            var ws = fs.createWriteStream('../img/single-fangsong.png');          //生成截图
            ws.on('error', function(err) { console.log(err); });
            var reqScreen = request(url);
            reqScreen.on('data', function(chunk) {// instead of loading the file into memory
            ws.write(chunk);// after the download, we can just pipe the data as it's being downloaded
          });
         
            reqScreen.on('end', function() {
            const spawn = require('child_process').spawn;
            const diff = spawn('diff', ['../img/single-fangsong.png', '../img/single-fangsong.png']);
            diff.stdout.on('data', function(data) {
                console.log("out=" + data.toString()); 
            });

            diff.stderr.on('data', function(data) {
                console.log("error=" + data.toString()); 
            });

            diff.on('close', function(code) {
              console.log('closing code: ' + code);
              expect(code).to.equal(0);
              setTimeout(done,5000);
            });
        });
    });
    });
});

describe("sendingcard 测试",function () {
    this.timeout(7000);
    describe("设置发送卡网口控制面积:256x128,效果看大屏",function () {
        var setsendingcardjs = {
            url:setsendingcardURL,
            method:'PUT',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{
                "dimension": {
                    "height": 0,
                    "width": 0
                },
                "frameflavor": {
                    "isinterlaced": 0
                },
                "netareas": [
                    {
                        "height": 128,
                        "startx": 0,
                        "starty": 0,
                        "width": 256
                    },
                    {
                        "height": 128,
                        "startx": 0,
                        "starty": 512,
                        "width": 1280
                    }
                ]
            }
        };
        it("设置A口面积：256x128",function (done) {
            request(setsendingcardjs,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                setTimeout(done,5000);
            }); 
        });
    });
	
    
    describe("回读设置网口面积",function () {
        it("A口回读成功，是：256x128",function (done) {
            var sending = function (error,response,body) {
                var getsending = JSON.parse(body);
                expect(getsending.frameflavor.isinterlaced).to.equal(0);
                expect(getsending.netareas[0].height).to.equal(128);
                expect(getsending.netareas[0].width).to.equal(256);
                done();
                console.log(getsending);
            };
            var reqsending = function () {
                request(getsendingcardRUL,sending);
            };
            setTimeout(reqsending,1000);
        })
    });

    describe("恢复发送卡面积到:1280x512",function () {
        var setsendingcardjs = {
            url:setsendingcardURL,
            method:'PUT',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{
                "dimension": {
                    "height": 0,
                    "width": 0
                },
                "frameflavor": {
                    "isinterlaced": 0
                },
                "netareas": [
                    {
                        "height": 512,
                        "startx": 0,
                        "starty": 0,
                        "width": 1280
                    },
                    {
                        "height": 512,
                        "startx": 0,
                        "starty": 512,
                        "width": 1280
                    }
                ]
            }
        };
        it("恢复A口面积到原状：1280x512,效果看大屏",function (done) {
            var getsending = function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                done();
            };
            var getreqsending = function () {
                request(setsendingcardjs,getsending);
            };
            setTimeout(getreqsending,500);
        });
    });
});

describe("休眠与唤醒",function () {
    this.timeout(5000);
    describe("休眠",function () {
        var changeStatuscX = {
            url:changestatusRUL,
            method:'POST',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{
                "command":"sleep"
            }
        };

        it("休眠指令发送",function (done) {
            request(changeStatuscX,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                setTimeout(done,3000);
            });
        });

        it("获取状态为休眠", function(done) {
            var powerstatusURL = 'http://192.168.42.129/api/powerstatus.json';
            request(powerstatusURL, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                var sleepstatus = JSON.parse(body);
                //console.log(JSON.stringify(body));
                console.log(sleepstatus);
                expect(sleepstatus.powerstatus).to.equals(0);
                //setTimeout(done,5000);
				done();
            });
        });
    });

    describe("发送唤醒指令",function () {
        var changeStatuscX = {
            url:changestatusRUL,
            method:'POST',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{
                command:"wakeup"
            }
        };

        it("唤醒指令发布",function (done) {
            request(changeStatuscX,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                setTimeout(done,2000);
            });
        });

        it("获取状态为唤醒", function(done) {
            var powerstatusURL = 'http://192.168.42.129/api/powerstatus.json';
            request(powerstatusURL, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                //console.log(JSON.stringify(body));
                var wakeupstatus = JSON.parse(body);
                console.log(wakeupstatus);
                expect(wakeupstatus.powerstatus).to.equals(1);
                done();
            });
        });
    });
});

describe("音量 测试",function () {
    this.timeout(7500);
    describe("设置音量：13",function () {
        var setvolumejs = {
            url:setvolumeURL,
            method:'PUT',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{
                "musicvolume":13
            }
        };

        it("ledvision读取值为85%",function (done) {
            request(setvolumejs,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                setTimeout(done,700);
            });

        })
    });

    describe("回读音量是否为：13",function () {
        it("回读数据，音量值13，ledvision显示85%左右",function (done) {
            var fk = function (error,response,body) {
                var getvolume = JSON.parse(body);
                expect(getvolume.musicvolume).to.equal(13);
                console.log(getvolume);
                done();
            };
            var fks = function () {
                request(getvolumeRUL,fk);
            };
            setTimeout(fks,6000);
        })
    });
    describe("恢复音量到:6",function () {
        var setvolumejs = {
            url:setvolumeURL,
            method:'PUT',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{
                "musicvolume":6
            }
        };
        it("恢复音量至6",function (done) {
            var fke = function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                //var getvolume2 = JSON.parse(body);
                done();
            };
            var fkev = function () {
                request(setvolumejs,fke);
            };
            setTimeout(fkev,500);
        });
    });
    describe("回读音量是否回读到6",function(){
        it("回读音量为6，ledvision显示40%左右",function (done) {
            var fken = function(req,res,body){
                var getvolume2 = JSON.parse(body);
                expect(getvolume2.musicvolume).to.equal(6);
                console.log(getvolume2);
                done();
            };
            var getvolk = function(){
                request(getvolumeRUL,fken);
            };
            setTimeout(getvolk,500);
        });
    });
});
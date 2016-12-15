var expect  = require("chai").expect;
var request = require("request");
var fs = require("fs");
var http = require("http");
var exec = require('child_process').exec;
var serverIP = "192.168.42.129";
var serverURL = "http://" + serverIP;
var apiURL = serverURL + "/api";
var setdimensionURL = apiURL + "/dimension";
var getdimensionURL = apiURL + "/dimension.json";
var screenshotURL = serverURL + "/transmission/ftp/config";
var cmdsinglekaiti = "mocha single-kaiti.js";
var cmdsinglesongti = "mocha single-songti.js";
var cmdsingleheiti = "mocha single-heiti.js";
var cmdsinglefangsong = "mocha single-fangsong.js";
var cmdsinglelishu = "mocha single-lishu.js";
var cmdMultiLine = "mocha Multi-line-1.js"

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
			var ws = fs.createWriteStream('../img/demo.png');          //生成截图
			ws.on('error', function(err) { console.log(err); });
		    var reqScreen = request(url);
		    reqScreen.on('data', function(chunk) {// instead of loading the file into memory
			ws.write(chunk);// after the download, we can just pipe the data as it's being downloaded
		  });
		 
		    reqScreen.on('end', function() {
			const spawn = require('child_process').spawn;
			const diff = spawn('diff', ['../img/demo.png', '../img/single-songti.png']);
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
            var ws = fs.createWriteStream('../img/demo.png');          //生成截图
            ws.on('error', function(err) { console.log(err); });
            var reqScreen = request(url);
            reqScreen.on('data', function(chunk) {// instead of loading the file into memory
            ws.write(chunk);// after the download, we can just pipe the data as it's being downloaded
          });
         
            reqScreen.on('end', function() {
            const spawn = require('child_process').spawn;
            const diff = spawn('diff', ['../img/demo.png', '../img/single-kaiti.png']);
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
            var ws = fs.createWriteStream('../img/demo.png');          //生成截图
            ws.on('error', function(err) { console.log(err); });
            var reqScreen = request(url);
            reqScreen.on('data', function(chunk) {// instead of loading the file into memory
            ws.write(chunk);// after the download, we can just pipe the data as it's being downloaded
          });
         
            reqScreen.on('end', function() {
            const spawn = require('child_process').spawn;
            const diff = spawn('diff', ['../img/demo.png', '../img/single-lishu.png']);
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
            var ws = fs.createWriteStream('../img/demo.png');          //生成截图
            ws.on('error', function(err) { console.log(err); });
            var reqScreen = request(url);
            reqScreen.on('data', function(chunk) {// instead of loading the file into memory
            ws.write(chunk);// after the download, we can just pipe the data as it's being downloaded
          });
         
            reqScreen.on('end', function() {
            const spawn = require('child_process').spawn;
            const diff = spawn('diff', ['../img/demo.png', '../img/single-heiti.png']);
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
            var ws = fs.createWriteStream('../img/demo.png');          //生成截图
            ws.on('error', function(err) { console.log(err); });
            var reqScreen = request(url);
            reqScreen.on('data', function(chunk) {// instead of loading the file into memory
            ws.write(chunk);// after the download, we can just pipe the data as it's being downloaded
          });
         
            reqScreen.on('end', function() {
            const spawn = require('child_process').spawn;
            const diff = spawn('diff', ['../img/demo.png', '../img/single-fangsong.png']);
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
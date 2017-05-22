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
//var cmdsingleline = "mocha single-line.js";
var cmdMultiLine = "mocha 04d-Multi-Line-10.js"

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
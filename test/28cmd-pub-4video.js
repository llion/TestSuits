const request = require("request");
const expect = require('chai').expect;
const exec = require('child_process').exec;
const cmdStrvsn = 'curl ftp://192.168.42.129/program/ -T Z:/TestPrograms/4video/packed/4video.vsn';
const cmdStrmkd = 'curl ftp://192.168.42.129/program/ -X "MKD 4video.files"';
const cmdStrvideo = 'curl ftp://192.168.42.129/program/4video.files/ -T {Z:/TestPrograms/4video/packed/4video.files/720PMV.mp4,Z:/TestPrograms/4video/packed/4video.files/F(MPEG4)-V(AVC)-A(AAC)-(672x378)-0.552M.mp4,Z:/TestPrograms/4video/packed/4video.files/onmoon.mp4,Z:/TestPrograms/4video/packed/4video.files/TCL2.MPG}';
var apiURL = "http://192.168.42.129/api";
var changeVsn = apiURL + "/vsns/sources/lan/vsns/4video.vsn/activated";

describe("发布节目video4video",function () {
    this.timeout(21000);
    describe("上传vsn文件",function () {
        it("文件上传", function (done) {
            exec(cmdStrvsn, function (err, stdout, stderr) {
                if (err) {
                    console.log('文件上传 error:' + stderr);
                } else {
                    console.log(stdout);
                }
                setTimeout(done,1000);
            });
        });
    });

    describe("创建文件夹",function () {
        it("文件夹4video", function (done) {
            exec(cmdStrmkd, function (err, stdout, stderr) {
                if (err) {
                    console.log('创建文件夹 error:' + stderr);
                } else {
                    console.log(stdout);
                }
                setTimeout(done,2000);
            });
        });
    });

    describe("上传资源文件",function () {
        it("资源文件4videom.mp4", function (done) {
            exec(cmdStrvideo, function (err, stdout, stderr) {
                if (err) {
                    console.log('上传资源文件 error:' + stderr);
                } else {
                    console.log(stdout);
                }
                done();
            });
        });
    });

    describe("切换节目到4video",function () {
        var changePrograms = {
            url:changeVsn,
            method:'PUT',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{}
        };
        it("修改节目到4video.vsn成功",function (done) {
            request(changePrograms,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

    });
});
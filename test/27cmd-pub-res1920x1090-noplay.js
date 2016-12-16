const request = require("request");
const expect = require('chai').expect;
const exec = require('child_process').exec;
const cmdStrvsn = 'curl ftp://192.168.42.129/program/ -T Z:/TestPrograms/res1920x1090/packed/res1920x1090.vsn';
const cmdStrmkd = 'curl ftp://192.168.42.129/program/ -X "MKD res1920x1090.files"';
const cmdStrvideo = 'curl ftp://192.168.42.129/program/res1920x1090.files/ -T Z:/TestPrograms/res1920x1090/packed/res1920x1090.files/res1920x1090.mp4';
var apiURL = "http://192.168.42.129/api";
var changeVsn = apiURL + "/vsns/sources/lan/vsns/res1920x1090.vsn/activated";

describe("发布节目videores1920x1090",function () {
    this.timeout(11000);
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
        it("文件夹res1920x1090", function (done) {
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
        it("资源文件res1920x1090m.mp4", function (done) {
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

    describe("切换节目到res1920x1090",function () {
        var changePrograms = {
            url:changeVsn,
            method:'PUT',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{}
        };
        it("修改节目到res1920x1090.vsn成功",function (done) {
            request(changePrograms,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

    });
});
const request = require("request");
const expect = require('chai').expect;
const exec = require('child_process').exec;
const cmdStrvsn = 'curl ftp://192.168.42.129/program/ -T D:/NewPrograms/1088x1920/1088x1920.vsn';
const cmdStrmkd = 'curl ftp://192.168.42.129/program/ -X "MKD 1088x1920.files"';
const cmdStrvideo = 'curl ftp://192.168.42.129/program/1088x1920.files/ -T D:/NewPrograms/1088x1920/1088x1920.files/1088x1920x29fps.mkv';
var apiURL = "http://192.168.42.129/api";
var changeVsn = apiURL + "/vsns/sources/lan/vsns/1088x1920.vsn/activated";

describe("发布节目video1088x1920",function () {
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
        it("文件夹1088x1920", function (done) {
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
        it("资源文件1088x1920x29fps.mkv", function (done) {
            exec(cmdStrvideo, function (err, stdout, stderr) {
                if (err) {
                    console.log('上传资源文件 error:' + stderr);
                } else {
                    console.log(stdout);
                }
                setTimeout(done,5000);
            });
        });
    });

    describe("切换节目到1088x1920",function () {
        var changePrograms = {
            url:changeVsn,
            method:'PUT',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{}
        };
        it("修改节目到1088x1920.vsn成功",function (done) {
            request(changePrograms,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

    });
});
const request = require("request");
const expect = require('chai').expect;
const exec = require('child_process').exec;
const cmdStrvsn = 'curl ftp://192.168.42.129/program/ -T D:/NewPrograms/singleline-moving-5fonts/packed/singleline-moving-5fonts.vsn';
const cmdStrmkd = 'curl ftp://192.168.42.129/program/ -X "MKD singleline-moving-5fonts.files"';
const cmdStrvideo = 'curl ftp://192.168.42.129/program/singleline-moving-5fonts.files/ -T {D:/NewPrograms/singleline-moving-5fonts/packed/singleline-moving-5fonts.files/Temp.mulpic,D:/NewPrograms/singleline-moving-5fonts/packed/singleline-moving-5fonts.files/Temp2.mulpic,D:/NewPrograms/singleline-moving-5fonts/packed/singleline-moving-5fonts.files/Temp3.mulpic,D:/NewPrograms/singleline-moving-5fonts/packed/singleline-moving-5fonts.files/Temp4.mulpic,D:/NewPrograms/singleline-moving-5fonts/packed/singleline-moving-5fonts.files/Temp5.mulpic,D:/NewPrograms/singleline-moving-5fonts/packed/singleline-moving-5fonts.files/Temp6.mulpic,D:/NewPrograms/singleline-moving-5fonts/packed/singleline-moving-5fonts.files/Temp.scrollmulpic,D:/NewPrograms/singleline-moving-5fonts/packed/singleline-moving-5fonts.files/Temp2.scrollmulpic,D:/NewPrograms/singleline-moving-5fonts/packed/singleline-moving-5fonts.files/Temp3.scrollmulpic,D:/NewPrograms/singleline-moving-5fonts/packed/singleline-moving-5fonts.files/Temp4.scrollmulpic,D:/NewPrograms/singleline-moving-5fonts/packed/singleline-moving-5fonts.files/Temp5.scrollmulpic,D:/NewPrograms/singleline-moving-5fonts/packed/singleline-moving-5fonts.files/Temp6.scrollmulpic}';
var apiURL = "http://192.168.42.129/api";
var changeVsn = apiURL + "/vsns/sources/lan/vsns/singleline-moving-5fonts.vsn/activated";

describe("发布节目singleline-moving-5fonts",function () {
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
        it("文件夹singleline-moving-5fonts", function (done) {
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
        it("资源文件singleline-moving-5fonts", function (done) {
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

    describe("切换节目到singleline-moving-5fonts",function () {
        var changePrograms = {
            url:changeVsn,
            method:'PUT',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{}
        };
        it("修改节目到singleline-moving-5fonts.vsn成功",function (done) {
            request(changePrograms,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

    });
});
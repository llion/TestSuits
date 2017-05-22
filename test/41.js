const request = require("request");
const expect = require('chai').expect;
const exec = require('child_process').exec;
const cmdStrvsn = 'curl ftp://192.168.42.129/program/ -T ../program/new0000.vsn';
const cmdStrmkd = 'curl ftp://192.168.42.129/program/new0000.files -T "../program/new0000.files"';
//const cmdStrvideo = 'curl ftp://192.168.42.129/program/new0000.files/ -T D:/program/1080P  25֡mv ��Ůʱ��.mp4 -T D:/program/Food25fps1080p.mp4 -T D:/program/�����ı�����2.txt -T D:/program/�����ı�����4.txt';
var apiURL = "http://192.168.42.129/api";
var changeVsn = apiURL + "/vsns/sources/lan/vsns/new0000.vsn/activated";

describe("������Ŀ��������",function () {
    this.timeout(11000);
    describe("�ϴ�vsn�ļ�",function () {
        it("�ļ��ϴ�", function (done) {
            exec(cmdStrvsn, function (err, stdout, stderr) {
                if (err) {
                    console.log('�ļ��ϴ� error:' + stderr);
                } else {
                    console.log(stdout);
                }
                setTimeout(done,1000);
            });
        });
    });

    describe("�����ļ���",function () {
        it("�ļ���new0000", function (done) {
            exec(cmdStrmkd, function (err, stdout, stderr) {
                if (err) {
                    console.log('�����ļ��� error:' + stderr);
                } else {
                    console.log(stdout);
                }
                setTimeout(done,2000);
            });
        });
    });

    describe("�ϴ���Դ�ļ�",function () {
        it("��Դ�ļ�more", function (done) {
            exec(cmdStrvideo, function (err, stdout, stderr) {
                if (err) {
                    console.log('�ϴ���Դ�ļ� error:' + stderr);
                } else {
                    console.log(stdout);
                }
                done();
            });
        });
    });

    describe("�л���Ŀ��new0000",function () {
        var changePrograms = {
            url:changeVsn,
            method:'PUT',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
            json:true,
            body:{}
        };
        it("�޸Ľ�Ŀ��new0000.vsn�ɹ�",function (done) {
            request(changePrograms,function (error,response,body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

    });
});
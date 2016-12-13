const exec = require('child_process').exec;
const cmdStr = 'adb connect 192.168.42.129';
const cmdplaying = 'adb shell dmesg';

describe("cmd命令行测试",function () {
    //this.timeout(11000);
    describe("adb connect",function () {
        it("192.168.42.129", function (done) {
            exec(cmdStr, function (err, stdout, stderr) {
                if (err) {
                    console.log('send multi.vsn to C6 error:' + stderr);
                } else {
                    //var data = JSON.parse(stdout);
                    console.log(stdout);
                }
                done();
                //setTimeout(done,10000);
            });
        });
    });
    describe("adb shell",function () {
        it("dmesg", function (done) {
            exec(cmdplaying, function (err, stdout, stderr) {
                if (err) {
                    console.log('send 内存测试.vsn to C6 error:' + stderr);
                } else {
                    //var data = JSON.parse(stdout);
                    console.log(stdout);
                }
                done();
            });
        });
    });
});
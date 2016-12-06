const exec = require('child_process').exec;
const cmdStr = 'curl ftp://192.168.42.129/program/ -T ./multi.vsn';
const cmdplaying = 'curl -X PUT http://192.168.42.129/api/vsns/sources/lan/vsns/multi.vsn/activated';

describe("cmd命令行测试",function () {
    this.timeout(3000);
	describe("发布节目到盒子",function () {
    	it("节目为mulit.vsn", function (done) {
        	exec(cmdStr, function (err, stdout, stderr) {
            	if (err) {
                	console.log('send multi.vsn to C6 error:' + stderr);
            	} else {
                	//var data = JSON.parse(stdout);
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
                done();
            });
        });
    });
});
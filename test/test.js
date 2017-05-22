var fs = require("fs");
const exec = require('child_process').exec;
const cmdStr = 'curl ftp://192.168.42.129/program/ -T ../programs/multi.vsn';
const cmdplaying = 'curl -X PUT http://192.168.42.129/api/vsns/sources/lan/vsns/multi.vsn/activated';

fs.writeFile('multi.vsn',function(err){
	if (err) throw err;
	console.log('saved successfully');
});
describe("cmd命令行测试",function () {
    this.timeout(3000);
	describe("发布节目到盒子",function () {
    	it("节目为mulit.vsn", function (done) {
        	exec(cmdStr, function (err, stdout, stderr) {
            	if (err) {
                	console.log('send multi.vsn to C6 error:' + stderr);
            	} else {
                	console.log(stdout);
            	}
            	setTimeout(done,2000);
				done();
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
				setTimeout(done,1000);
                //done();
            });
        });
    });
});
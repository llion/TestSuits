const exec = require('child_process').exec;
const cmdStr = 'curl ftp://192.168.42.129/program/ -T ./vsn/multiline.vsn -T ./vsn/multiline.files';
const cmdplaying = 'curl -X PUT http://192.168.42.129/api/vsns/sources/lan/vsns/multi.vsn/activated';
function fn(){
		exec(cmdStr, function (err, stdout, stderr) {
			if (err) {
                	console.log('send multi.vsn to C6 error:' + stderr);
            	} else {
                	console.log(stdout);
            	}
		})
		exec(cmdplaying, function (err, stdout, stderr) {
                if (err) {
                    console.log('send multi.vsn to C6 error:' + stderr);
                } else {
                    console.log(JSON.parse(stdout));
                }
	})
})
setInterval(fn,1000);
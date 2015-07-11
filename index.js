var spawn = require('child_process').spawn;

exports.whois = function (domain, callback) {
	var query = spawn('whois', [domain]);
	var domain = {};

	query.stdout.setEncoding('utf8');

	query.stdout.on('data', function (data) {
  var str = data.toString();
	var lines = str.split("\n");
	for (var i in lines) {
			if (lines[i].indexOf(':') != -1) {
				var cut = lines[i].split(":");
				if (cut[0] != undefined && cut[1] != undefined) {
					domain[cut[0]] = cut[1];
				}
			}
		}
	});

	query.on('close', function (code) {
    callback(null, domain);
	});

};

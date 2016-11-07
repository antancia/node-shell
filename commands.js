var fs = require('fs');
var request = require('request');

commands = {

	pwd: function (done){
		var output ="";
		output += __dirname;
		done(output);
	},
	date: function (done){
		var output ="";
		output += Date();
		done(output);
	},
	ls: function (done){
		var output = "";
		fs.readdir('.', function(err, files) {
	  		if (err) throw err;
	  		files.forEach(function(file) {
	    		output += file.toString() + "\n";
	  		})
	  		done(output);
		});
	},
	echo: function (arr,done) {
		var string = arr.join(" ");
		done(string);
	},
	cat: function (files,done) {
		var output = "";
		files.forEach(function(file){
			fs.readFile(file, function(err, data) {
				if (err) throw err;
				output += data;
				done(output);
				//process.stdout.write(data + "\n");
				
			});
		});
	},
	head: function (file,done) {
			var output = "";
			fs.readFile(file[0], 'utf8', function(err, data) {
				if (err) throw err;
				data = data.split("\n").slice(0,10).join("\n");
				output += data;
				done(output);
				
			});

	},
	tail: function (file,done) {
			var output = "";
			fs.readFile(file[0], 'utf8', function(err, data) {
				if (err) throw err;
				data = data.split("\n");
				data = data.slice(data.length-5,data.length).join("\n");
				output += data;
				done(output);
				
			});
	},
	curl: function (url,done) {
		var output = "";
		request(url[0], function (error, response, body) {
  			if (!error && response.statusCode == 200) {
    			output += body;
  			}
  			done(output);
		});
	},

}

module.exports = commands;
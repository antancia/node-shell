var commands = require('./commands');


process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
  var cmd = data.toString().toLowerCase().trim(); // remove the newline
  

  if (commands.hasOwnProperty(cmd)){
  	commands[cmd](done);
  } else {
  	var cmdArr = cmd.split(" ");
  	var rest = cmdArr.splice(1);
  	 if (commands.hasOwnProperty(cmdArr[0])){
  		commands[cmdArr[0]](rest,done);
  	}

  }

});

var done = function (output) {
		process.stdout.write(output);
		process.stdout.write("\nprompt > ");
};
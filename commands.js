commands = {

	pwd: function (){
		process.stdout.write(__dirname);
		process.stdout.write('\nprompt > ');
	},
	date: function (){
		process.stdout.write(Date());
		process.stdout.write('\nprompt > ');
	}
}


// var commandFunc = function (cmd) {
// 	if (cmd === "pwd") {
	  	
// 	  } else if (cmd === "date") {
// 	  }else {
// 	  	  process.stdout.write('You typed: ' + cmd);
// 	  }

// 	 process.stdout.write('\nprompt > ');
// }

module.exports = commands;
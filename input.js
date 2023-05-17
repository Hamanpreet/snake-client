//This variable declared to let stdin access both user input and connection obj.
let connection;
// setup interface to handle user input from stdin

const setupInput = function (conn) {
  connection = conn;
  //read input by user
  const stdin = process.stdin;
  //raw mode, input not processed line by line, Ctrl + C can be captured
  stdin.setRawMode(true);
  //user inputs handled as strings
  stdin.setEncoding("utf8");
  //resumes reading from stdin,otherwise paused
  stdin.resume();
  //set an eevent listener for keyboard input
  stdin.on("data", handleUserInput);
  //stdin object will help function to listen
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === '\u0077') {
    connection.write("Move: up");
  }
  if (key === '\u0061') {
    connection.write("Move: left");
  }
  if (key === '\u0073') {
    connection.write("Move: down");
  }
  if (key === '\u0064') {
    connection.write("Move: right");
  }

};

module.exports = {setupInput};
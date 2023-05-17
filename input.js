//This variable declared to let stdin access both user input and connection obj.
let connection;
// setup interface to handle user input from stdin
const {
  MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY,
} = require("./constants");
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
  if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
  }
  if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }
  if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }
  if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }

};

module.exports = {setupInput};
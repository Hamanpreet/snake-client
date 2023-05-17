//This variable declared to let stdin access both user input and connection obj.
let connection;
// setup interface to handle user input from stdin
const {
  EXIT,
  obj
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
   //console.log(obj);
  if (key === EXIT) {
    process.exit();
  }
  //console.log("here is the key",key, obj[key]);
  if (obj[key]) {

    const message = obj[key];
    connection.write(message);
  }

  // if (key === MOVE_UP_KEY) {
  //   connection.write("Move: up");
  // }
  // if (key === MOVE_LEFT_KEY) {
  //   connection.write("Move: left");
  // }
  // if (key === MOVE_DOWN_KEY) {
  //   connection.write("Move: down");
  // }
  // if (key === MOVE_RIGHT_KEY) {
  //   connection.write("Move: right");
  // }

};

module.exports = {setupInput};
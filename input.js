//This variable declared to let stdin access both user input and connection obj. in global scope
let connection;
const {EXIT,obj} = require("./constants");

// setup interface to handle user input from stdin
const setupInput = function(conn) {
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
  if (key === EXIT) {
    process.exit();
  }
  //if the key exists, print the respective message
  if (obj[key]) {
    const message = obj[key];
    connection.write(message);
  } else {
    //otherwise, ask user to press right keys(Added functionality)
    connection.write("Say: Press right keys");
  }
};

//exporting the setInput using new ES6 syntax
module.exports = {setupInput};
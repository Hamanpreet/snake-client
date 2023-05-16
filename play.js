const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
};
const {connect}= require("./client.js");
//or import { connect } from './client.js';
// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  //set an eevent listener for keyboard input
  stdin.on("data", handleUserInput);

  //stdin object will help function to listen
  return stdin;
};


console.log("Connecting ...");
connect();
setupInput();
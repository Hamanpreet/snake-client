// setup interface to handle user input from stdin
const setupInput = function () {
  //read unput by user
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
};

module.exports = {setupInput};
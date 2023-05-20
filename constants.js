const IP = "localhost";
const PORT = 50541;

//unicode for various keys
const EXIT = '\u0003';
const  MOVE_UP_KEY = '\u0077';
const  MOVE_DOWN_KEY = '\u0073';
const  MOVE_RIGHT_KEY = '\u0064';
const  MOVE_LEFT_KEY = '\u0061';
const MSG_KEY = '\u0071';
const SLOW_KEY = '\u0078';

//keys need to be in brackets to treat them as keys
const obj = {[MOVE_UP_KEY]: "Move: up",
  [MOVE_LEFT_KEY]: "Move: left",
  [MOVE_DOWN_KEY]: "Move: down",
  [MOVE_RIGHT_KEY]: "Move: right",
  [MSG_KEY]: "Say: Here I go",
  [SLOW_KEY]: "Say: U r slow"
};


//exporting them to be used by input
module.exports = {
  IP,
  PORT,
  EXIT,
  obj
};
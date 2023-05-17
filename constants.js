const IP = "localhost";
const PORT = 50541;
const EXIT = '\u0003';
const  MOVE_UP_KEY = '\u0077';
const  MOVE_DOWN_KEY = '\u0073';
const  MOVE_RIGHT_KEY = '\u0064';
const  MOVE_LEFT_KEY = '\u0061';
//keys need to be in brackets to treat them as keys
const obj = {[MOVE_UP_KEY]: "Move: up",
              [MOVE_LEFT_KEY]: "Move: left",
              [MOVE_DOWN_KEY]: "Move: down",
              [MOVE_RIGHT_KEY]: "Move: right"
   };

module.exports = {
  IP,
  PORT,
  EXIT,
  obj
};
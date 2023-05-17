// we are getting the "net module in this for TCP clients and servers in node.js"
const net = require("net");
const { IP, PORT } = require("./constants");
// establishes a connection with the game server

const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT // PORT number here,
  });
  conn.on("connect", () => {              // when connection done, this callback executes
    console.log("Successfully connected to game server");
    conn.write("Name: HPK");
    setTimeout(() => {
      conn.write("Say: Come");
    },1000);
    
  });
  // conn.on("connect", () => {
  //   conn.write("Move: up");
  //   setTimeout(() => {
  //     conn.write("Move: left");
  //   },1000);
  //   setInterval(() => {
  //     conn.write("Move: up");
  //   },1000);
  // });
  conn.on("data", (data) => {
    console.log("Server says: ",data);   // event listener for data, logs reecived data
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");            //make it human readable

  return conn;
};

module.exports = {connect};

// or we can do this
//export{connect};    without assigning to a variable

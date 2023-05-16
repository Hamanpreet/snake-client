// we are getting the "net module in this for TCP clients and servers in node.js"
const net = require("net");
// establishes a connection with the game server

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",// IP address here,
    port: 50541 // PORT number here,
  });
  conn.on("connect", () => {              // when connection done, this callback executes
    console.log("Connection established");
    conn.write("hello fromm client");
  });
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

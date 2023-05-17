// We are getting the "net module in this for TCP clients and servers in node.js"
const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  let count = 0;
  const conn = net.createConnection({
    // Have moved IP and Port no. in the constants
    host: IP,
    port: PORT
  });

  // when connection done, this callback executes
  conn.on("connect", () => {
    // displaying a count of how many players are playing(Stretch)
    count++;
    console.log("Players playing:",count);
    console.log("Successfully connected to game server");
    conn.write("Name: HPK");
  });

  // event listener for data, logs received data
  conn.on("data", (data) => {
    console.log("Server says: ",data);
  });

  // interpret incoming data as text, make it human readable
  conn.setEncoding("utf8");
  return conn;
};

//exporting the connect function to be used by play.js
module.exports = {connect};

// or we can do this
//export{connect};    without assigning to a variable

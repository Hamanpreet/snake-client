const {connect}= require("./client.js");
//or import { connect } from './client.js';
const {setupInput} = require("./input.js");

console.log("Connecting ...");
connect();
setupInput();
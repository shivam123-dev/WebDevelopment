// Blocking vs Non-Blocking execution

// Synchronus or Blocking-> line by line execution
// Asynchronus or Non-Blocking-> line by line execution not guaranteed and callbacks will fire

const fs = require("fs");
// fs.readFile("delde.txt","utf-8",(err,data)=>{
    // console.log(err, data);
fs.readFile("dele.txt","utf-8",(err,data)=>{
    console.log(data);
});

console.log("This is a message");
// using built in modules

const fs = require("fs");
// reading from the file
const text = fs.readFileSync("dele.txt","utf-8");

let text1 = fs.readFileSync("dele.txt","utf-8");
text1 = text1.replace("browser","Rohan")
console.log("The content of the file is "+text);

// for creating and writing to a file
console.log("Creating a new file...");
fs.writeFileSync("rohan.txt",text1);

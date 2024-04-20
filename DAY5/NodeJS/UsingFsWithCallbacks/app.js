const fs = require("fs");
// Non-blocking approach
console.log("Started !");
// fs.readFile("Input.txt", (err, dataFromTheFile) => {
//   if (!err) {
//     console.log(dataFromTheFile.toString());
//   }
// });
fs.writeFile("Output.txt", "Text to be written to the file !", err => {
  if (!err) {
    console.log("Text written !");
  }
});
console.log("Ended !");

// Blocking approach
// console.log("Started !");
// const dataFromTheFile = fs.readFileSync("Input.txt");
// console.log(dataFromTheFile.toString());
// console.log("Ended !");

const fs = require("fs");

console.log("Started !");
const readableStream = fs.createReadStream("Input.txt");
const writableStream = fs.createWriteStream("Output.txt");
// let dataToBeWritten = "";
// readableStream.on("data", function (chunk) {
//   //   console.log(">>>>>>>>>>>>>>>> CHUNK >>>>>>>>>>>>>");
//   dataToBeWritten += chunk.toString();
// });

// readableStream.on("end", function () {
//   console.log("File read completely !");
//   writableStream.write(dataToBeWritten);
//   writableStream.end();
// });

// OR
readableStream.pipe(writableStream);
console.log("Ended !");

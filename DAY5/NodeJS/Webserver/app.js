const http = require("http"); // built in
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("Index.html", (err, data) => {
      if (!err) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(data); // send file contents as response to client
      }
    });
    //   const readableStream = fs.createReadStream("Index.html", "utf-8");
    //   res.statusCode = 200;
    //   res.setHeader("Content-Type", "text/html");
    //   readableStream.pipe(res);
  } else if (req.url == "/products") {
    var products = [
      { id: 1, title: "Macbook Pro" },
      { id: 2, title: "Camera" },
    ];
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify(products));
  } else {
    res.statusCode = 404;
    res.end("Resource not found !");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

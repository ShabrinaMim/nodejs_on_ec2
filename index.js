const http = require("http");

http
  .createServer((req, res) => {
    res.write("Server is running");
    res.end();
    console.log("Server is running in port 80");
  })
  .listen(80);

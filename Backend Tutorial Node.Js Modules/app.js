// const { createServer } = require("http");

// const port = 3000;
// const hostname = "127.0.0.1"

// const server = createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("content-Type", "text/html");
//     res.end("<h1>Heloo</h1>");
// });

// server.listen(port, hostname, () => {
//     console.log(`server in running: http://${hostname}:${port}/`);
// });


const fs = require("fs");
const text = fs.readFileSync("index.html", "utf-8");
console.log(text);

 


// const fs = require("fs");
// fs.writeFileSync("test.txt", "Hello Node.js");
// const text1 = fs.readFileSync("test.txt", "utf-8");

// console.log(text1);

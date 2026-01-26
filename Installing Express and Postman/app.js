const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/users", (req, res) => {
  res.json({ name: "Bilal" });
});


app.listen(3000, "127.0.0.1", () => {
    console.log(`server in running: http://127.0.0.1:3000/`);
});

// Require Express
const express = require("express");
// Express server handling requests and responses
const app = express();
const port = 3000;
app.use(express.static("public"));

// First Route
app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/works.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

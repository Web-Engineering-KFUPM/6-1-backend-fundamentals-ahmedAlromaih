const express = require("express");

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});



app.get("/about", (req, res) => {
  res.send("Welcome to the about page!");
});



app.get("/student", (req, res) => {
  res.send("Welcome to the student page!");
});



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

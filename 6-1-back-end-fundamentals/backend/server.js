const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());



app.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});



app.get("/about", (req, res) => {
  res.send("Welcome to the about page!");
});



app.get("/student", (req, res) => {
  res.json({
    name: "Aisha",
    major: "Computer Science",
  });
});



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

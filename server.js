const express = require("express");
const path = require("path");
const app = express();
app.use("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "home.html"));
});
app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "login.html"));
});

app.listen(3000, () => {
  console.log("server:3000");
});

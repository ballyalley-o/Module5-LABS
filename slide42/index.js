const BeersRoute = require("./BeersRoute");
const BeersController = require("./BeersController");
const express = require("express");

const app = express();
const PORT = 3000;

app.use("/", express.static("public"));

app.use("/calculator", calculatorRoute);

app.get("/test", (req, res) => {
  res.send("hello World, this is Slide 65");
});

app.listen(PORT, (req, res) => {
  console.log(`Slide 65/Server is running on port ${PORT}`);
});

module.exports = app;

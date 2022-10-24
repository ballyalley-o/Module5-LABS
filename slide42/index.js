//const BeersRoute = require("./BeersRoute");
//const BeersController = require("./BeersController");
const calculatorRoute = require('./routes/calcRoute')
const express = require("express");

const app = express();
const PORT = 3000;

app.use("/", express.static("public")); //this means that static HTML/CSS/JS files in the public folder will be served from the root endpoint, so index.html should go in there

app.use("/calculator", calculatorRoute);

app.get("/test", (req, res) => {
  res.send("hello World, this is Slide 65");
});

app.listen(PORT, (req, res) => {
  console.log(`Slide 65/Server is running on port ${PORT}`);
});

module.exports = app;

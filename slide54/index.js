const express = require("express");
const calculatorRoute = require('./routes/calcRoute')

const app = express();
const port = 3000;


app.use("/", express.static("public"));

app.use("/calculator", calculatorRoute);

app.get("/test", (req, res) => {
  res.send("hello World, this is Slide 54");
});

app.listen(port, (req, res) => {
  console.log(`Slide 54/Server is running on port ${port}`);
});

module.exports = app;

const express = require("express");
const Calculator = require("./Calculator");

const app = express();
const port = 3000;

let myCalc = new Calculator();
let myCalc2 = new Calculator();
let myCalc3 = new Calculator();
let myCalc4 = new Calculator();



myCalc.add(3, 4);
myCalc.add(4, 8);
myCalc2.substract(50, 23);
myCalc3.multiply(20, 23);
myCalc4.divide(252, 23);


app.use("/", express.static("public"));

app.get("/test", (req, res) => {
  res.send("hello World, this is Slide 54");
});

app.listen(port, (req, res) => {
  console.log(`Slide 54/Server is running on port ${port}`);
});

module.exports = app;

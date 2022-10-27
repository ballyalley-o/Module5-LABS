const Calculator = require("../libraries/Calculator");
const myCalc = new Calculator();

const addNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = myCalc.add(number1, number2);
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
};


const substractNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let difference = myCalc.substract(number1, number2);
  console.log(difference);
  res.status(200);
  res.json({ result: difference });
};

const multiplyNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let product = myCalc.multiply(number1, number2);
  console.log(product);
  res.status(200);
  res.json({ result: product });
};

const divideNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let dividend = myCalc.divide(number1, number2);
  console.log(dividend);
  res.status(200);
  res.json({ result: dividend });
};

module.exports = {
  addNumbers, substractNumbers, multiplyNumbers, divideNumbers,
};

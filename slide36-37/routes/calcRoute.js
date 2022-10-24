const express = require('express');

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Hello World!");
});
router.get("/test2", (req, res) => {
  res.send("Second test");
});


//add
router.get('/add', (req, res) => {
let number1=parseInt(req.query.num1);
let number2=parseInt(req.query.num2);

let sum=number1+number2
console.log(sum)
res.status(200)
res.json({result:sum})

})


//substract
router.get("/substract", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);

  let  difference = number1 - number2;
  console.log(difference);
  res.status(200);
  res.json({ result: difference });
});


//multiply
router.get("/multiply", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);

  let  product = number1 * number2;
  console.log(product);
  res.status(200);
  res.json({ result: product });
});


//divide
router.get("/divide", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);

  let dividend = number1 / number2;
  console.log(dividend);
  res.status(200);
  res.json({ result: dividend  });
});


module.exports = router;

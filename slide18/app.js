const express = require("express");


const app = express();
const app1 = express();
const app2 = express();


const port1 = 3000;
const port2 = 5000;
const port3 = 8000;




app.get("/", (req, res) => {
  res.send("This is PORT 1");
});


app.listen(port1, () => {
  console.log(`Slide 18: Exercise 1
listening in PORT: ${port1}`);
});



app1.get("/", (req, res) => {
  res.send("This is PORT 2");
});

app1.listen(port2, () => {
  console.log(`Slide 18: Exercise 1
listening in PORT: ${port2}`);
});

app2.get("/", (req, res) => {
  res.send("This is PORT 3");
});

app2.listen(port3, () => {
  console.log(`Slide 18: Exercise 1
listening in PORT: ${port3}`);
});

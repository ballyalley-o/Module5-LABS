const calculatorRoute = require("./calcRoute");
const calculatorController = require("./calcController");
const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");
const express = require("express");

const app = express();

const port = 3000;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//you don't have a public directory, but ideally you directory structure should follow the same structure as the previous slide54 one
app.use("/", express.static("public"));

app.use("/calculator", calculatorRoute);

app.get("/test", (req, res) => {
  res.send("hello World this is Slide 65: Part 1");
});

app.listen(port, (req, res) => {
  console.log(`Slide65: Part 1/Server is running on port ${port}`);
});

module.exports = app;

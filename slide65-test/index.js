const calculatorRoute = require("./calcRoute");
const calculatorController = require("./calcController");
const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");
const express = require("express");

const API_URL = "https://api.punkapi.com/v2/beers/random";
const API_URL_PULL = "https://api.punkapi.com/v2/beers?page=1&per_page=80";
const API_URL_PUSH = "https://api.punkapi.com/v2/beers?page=2&per_page=80";

const app = express();

const port = 3000;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/", express.static("public"));

app.use("/home", calculatorRoute);
app.use("/history", calculatorRoute);

app.get("/test", (req, res) => {
  res.send("hello World this is Slide 65: Part 2");
});

app.listen(port, (req, res) => {
  console.log(`Slide65: Part 2 /Server is running on port ${port}`);
});



module.exports = {  app, API_URL, API_URL_PULL, API_URL_PUSH,  };

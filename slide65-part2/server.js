const express = require("express");
const BeersRoute = require("./BeersRoute");
const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");
require("dotenv").config();

const path = require("path");

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Slide 65:  Part 2/Server is running on port ${process.env.PORT}`);
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/", express.static("public"));


app.get("/home", async (req, res) => {
    const URL_RANDOM = "https://api.punkapi.com/v2/beers/random";
    const fetch_res = await fetch(URL_RANDOM);
    const data = await fetch_res.json();
    res.json()

});

app.get("/history", async (req, res) => {
  const URL_PAGE1 = "https://api.punkapi.com/v2/beers?page=1&per_page=80";
  const fetch_res = await fetch(URL_PAGE1);
  const data = await fetch_res.json();
  res.json();
});


app.get("/foodmatch", async (req, res) => {
  const URL_PAGE2 = "https://api.punkapi.com/v2/beers?page=2&per_page=80";
  const fetch_res = await fetch(URL_PAGE2);
  const data = await fetch_res.json();
  res.json();
});


app.get("/test", (req, res) => {
  res.send("hello World this is Slide 65: Part 2");
});

module.exports = app;

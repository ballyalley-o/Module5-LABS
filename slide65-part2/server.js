const express = require("express");
const BeersRoute = require("./routes/BeersRoute");
const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");
require("dotenv").config();

const path = require("path");

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Slide 65:  Part 2/Server is running on port ${process.env.PORT}`);
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//all public-facing HTML/CSS/JS/IMG files go in the public directory

app.use("/", express.static("public"));

//the routes specify which endpoints are available in this backend service, and those will match your URLs in your public-facing JS

app.use("/beers", BeersRoute);

//then your controller (called from the routes) does the logic of actually calling the external API


app.get("/test", (req, res) => {
  res.send("hello World this is Slide 65: Part 2");
});

module.exports = app;

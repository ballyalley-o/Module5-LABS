const calculatorRoute = require ("./routes/calcRoute");
const express = require("express");

const app = express();
const port = 3000;


app.use('/', express.static('public')) //this means that static HTML/CSS/JS files in the public folder will be served from the root endpoint, so index.html should go in there

app.use('/calculator', calculatorRoute)

app.get("/test", (req, res) => {
    res.send('hello World')
});

app.listen(port, (req, res) => {
    console.log(`Slide36-37/Server is running on port ${port}`);
})

module.exports = app;

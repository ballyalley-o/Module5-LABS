const express = require('express');
const calculatorController = require ('./calcController');
const cors = require('cors')


const router = express.Router();

router.get('/home', (req, res) => {
    calculatorController.getBeer(req, res);
})

router.get("/history", (req, res) => {
  calculatorController.beerChart(req, res)
    );
});




module.exports = router;


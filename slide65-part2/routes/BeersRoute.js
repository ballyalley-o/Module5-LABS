const express = require("express");
const BeersController = require("../controllers/BeersController");
const router = express.Router();


router.get("/home", (req, res) => {
  BeersController.getBeer(req, res);
});

router.get("/history", (req, res) => {
 BeersController.beerChart(req, res);
});

router.get("/foodmatch", (req, res) => {
  BeersController.loadBeers(req, res);
});



module.exports = router;


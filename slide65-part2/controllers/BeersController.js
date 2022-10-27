const fetch = require('node-fetch');

const getBeer = async (req, res) => {
    const URL_RANDOM = "https://api.punkapi.com/v2/beers/random";
    const fetch_res = await fetch(URL_RANDOM);
    const data = await fetch_res.json();
    res.json(data)

};

const beerChart = async (req, res) => {
  const URL_PAGE1 = "https://api.punkapi.com/v2/beers?page=1&per_page=80";
  const fetch_res = await fetch(URL_PAGE1);
  const data = await fetch_res.json();
  res.json(data);
};


const loadBeers = async (req, res) => {
  const URL_PAGE2 = "https://api.punkapi.com/v2/beers?page=2&per_page=80";
  const fetch_res = await fetch(URL_PAGE2);
  const data = await fetch_res.json();
  res.json(data);
};

module.exports = {
    getBeer, beerChart, loadBeers
};
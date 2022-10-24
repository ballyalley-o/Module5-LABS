require("dotenv").config();

function getBeer(e) {
  e.preventDefault();
  fetch(`http://localhost:${process.env.PORT}/beers/random`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const name = data[0].name;
      const description = data[0].description;
      const { volume } = data[0];
      const volumeValue = volume.value;
      const volumeUnit = volume.unit;
      const { method } = data[0];
      const methodTemp = method.mash_temp;
      const methodTwist = method.twist;
      const alc = data[0].abv;

      randomBeer.innerHTML = name + " " + volumeValue + " " + volumeUnit;
      descDisplay.innerHTML = description;
      infoBeerTab.innerHTML = methodTwist;
      alcLevel.innerHTML = alc + "%";
      alcLevel.style.display = "block";
      infoBeerTab.style.display = "block";
    });
}

//chart m1
const yearArrX = [];
const monthArrY = [];
const alchArrR = [];
const nameArr = [];
let tableName = [];

beerChart();

async function beerChart() {
  await beerForChart();
  const ctx = document.getElementById("chart").getContext("2d");
  const chart = new Chart(ctx, {
    type: "scatter",
    options: {
      plugins: {
        tooltip: {
          callbacks: {
            label: function (ctx) {
              //this loops through all the names and always returns after the first one
              //var label = nameArr;
              //for (var i = 0; i < nameArr.length; i++) {
              //return label[i];

              //this grabs the index of the current graph item and matches it up with the name array (assumes both are in the same order)
              let label = nameArr[ctx.dataIndex];
              return label;
            },
          },
        },
      },
      scales: {
        x: {
          type: "time",
          position: "bottom",
          time: {
            unit: "year",
          },
        },
      },
    },
    data: {
      labels: yearArrX,
      datasets: [
        {
          label: "Year Established",
          data: monthArrY,
          backgroundColor: "#0D0D0D",
          borderWidth: 5,
        },
      ],
    },
  });
}

async function beerForChart() {
  const response = await fetch(`http://localhost:${process.env.PORT}/beers/page1`);
  let data = await response.json();

  data.forEach((row) => {
    tableName = row.name;
    const tableDate = row.first_brewed;
    const dateSplit = tableDate.split("/");
    const tableYear = dateSplit[1];
    const tableMonth = dateSplit[0];
    const tableAlch = row.abv;
    const datapoints = data;

    yearArrX.push(tableYear);
    monthArrY.push(tableMonth);
    alchArrR.push(tableAlch);
    nameArr.push(tableName);

    console.log(tableName);
  });
}

//beer match
// const beerFest = document.getElementById("beerFest");
// const beerSearch = document.getElementById("beerSearch");
let dataBM = [];
let slicedFood = [];

const loadBeers = async () => {
  const res = await fetch(`http://localhost:${process.env.PORT}/beers/page2`);
  dataBM = await res.json();
  beerMenu(dataBM);

  dataBM.forEach((bottle) => {
    const foodPair = bottle.food_pairing;
    slicedFood = foodPair.slice(",");
  });
  // console.log(dataBM);
};

const beerMenu = (beers) => {
  const beerCon = beers
    .map((beer) => {
      return `
      <li class="beer">
        <h2>${beer.name}</h2>
        <p>${beer.food_pairing}</p>
        <img src="${beer.image_url}"></img>
      </li>
      `;
    })
    .join("");
  beerFest.innerHTML = beerCon;
};

loadBeers();

module.exports = {
  getBeer,
  beerChart,
  loadBeers,
};

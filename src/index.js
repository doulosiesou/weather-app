import { format } from "date-fns";
import { processData } from "./modules/processData";
import { Data } from "./modules/createDataObj";

// Define apiKey and the request URL
const apiKey =
  // "https://api.weatherapi.com/v1/current.json?key=d50306b4b6774477b8f163431232406&q=";
  "https://api.weatherapi.com/v1/forecast.json?key=d50306b4b6774477b8f163431232406&q=";

var startCity = "Pueblo, CO";
let city = startCity;
var reqCurrentURL = apiKey + startCity + "&days=7";
console.log(reqCurrentURL);

// Today's date
const todaysDateLabel = document.querySelector(".current--date");
let todaysDate = format(new Date(), "E MMM dd, yyyy");
todaysDateLabel.innerHTML = todaysDate;

let currentCity = document.querySelector(".heading-primary");
currentCity.textContent = `Current weather for: ${city}`;

// Create label objects and event listeners for unit buttons in top right
const metricBtn = document.querySelector(".btn-units-metric");
const englishBtn = document.querySelector(".btn-units-english");

const labelMetricUnits = document.querySelectorAll(".label-units-metric");
const labelForecastMetricUnits = document.querySelectorAll(
  ".forecast-labels-units.metric"
);
const labelEnglishUnits = document.querySelectorAll(".label-units-english");
const labelForecastEnglishUnits = document.querySelectorAll(
  ".forecast-labels-units.english"
);

let displayState = "english";

metricBtn.addEventListener("click", function () {
  displayState = "metric";
  metricBtn.classList.remove("btn--metric--off");
  metricBtn.classList.add("btn--metric--on");

  englishBtn.classList.remove("btn--english--on");
  englishBtn.classList.add("btn--english--off");

  for (let label of labelMetricUnits) {
    label.classList.remove("display-off");
    label.classList.add("display-on");
  }
  for (let label of labelForecastMetricUnits) {
    label.classList.remove("display-off");
    label.classList.add("display-on");
  }
  for (let label of labelEnglishUnits) {
    label.classList.remove("display-on");
    label.classList.add("display-off");
  }
  for (let label of labelForecastEnglishUnits) {
    label.classList.remove("display-on");
    label.classList.add("display-off");
  }
  fetch(reqCurrentURL, { mode: "cors" })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      let dataObject = new Data(response, city, todaysDate);
      processData(dataObject, displayState);
    })
    .catch(function (err) {
      console.log(`in submitBtn function line 71 and error is ${err}`);
    });
});

englishBtn.addEventListener("click", function () {
  displayState = "english";
  metricBtn.classList.remove("btn--metric--on");
  metricBtn.classList.add("btn--metric--off");

  englishBtn.classList.remove("btn--english--off");
  englishBtn.classList.add("btn--english--on");

  for (let label of labelEnglishUnits) {
    label.classList.remove("display-off");
    label.classList.add("display-on");
  }
  for (let label of labelForecastEnglishUnits) {
    label.classList.remove("display-off");
    label.classList.add("display-on");
  }
  for (let label of labelMetricUnits) {
    label.classList.remove("display-on");
    label.classList.add("display-off");
  }
  for (let label of labelForecastMetricUnits) {
    label.classList.remove("display-on");
    label.classList.add("display-off");
  }
  fetch(reqCurrentURL, { mode: "cors" })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      let dataObject = new Data(response, city, todaysDate);
      processData(dataObject, displayState);
    })
    .catch(function (err) {
      console.log(`in submitBtn function line 76 and error is ${err}`);
    });
});

// Fetch a response from weather API for 'current' conditions
fetch(reqCurrentURL, { mode: "cors" })
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    // localStorage.clear("weather");
    // localStorage.setItem("weather", JSON.stringify(response));

    let dataObject = new Data(response, city, todaysDate);
    processData(dataObject, displayState);
  })
  .catch(function (err) {
    console.log(`Index line 115 Search error: ${err}`);
  });

// Gather search data from text input and create submitBtn event listener
let searchValue = document.querySelector(".search-item");
let submitBtn = document.querySelector(".search-btn");

submitBtn.addEventListener("click", function () {
  let searchStringEnd = searchValue.value;
  city = searchStringEnd;
  // apiKey + startCity + "&days=7";
  reqCurrentURL = apiKey + city + "&days=7";

  let cityHeading = document.querySelector("h1");
  cityHeading.textContent = `Current weather for: ${city}`;
  console.log(`Inside submitBtn line 138 and the city is ${city}
  and the reqCurrentURL is ${reqCurrentURL}`);

  fetch(reqCurrentURL, { mode: "cors" })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(`in submitBtn line 144 and the city is ${city}`);
      let dataObject = new Data(response, city, todaysDate);
      processData(dataObject, displayState);
    })
    .catch(function (err) {
      console.log(`in submitBtn function line 148 and error is ${err}`);
    });
  return city;
});

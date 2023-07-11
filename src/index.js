import { format } from "date-fns";
import { processData } from "./modules/processData";
import { Data } from "./modules/createDataObj";

// Define apiKey and the request URL
var apiKey =
  // "https://api.weatherapi.com/v1/current.json?key=d50306b4b6774477b8f163431232406&q=";
  "https://api.weatherapi.com/v1/forecast.json?key=d50306b4b6774477b8f163431232406&q=";

var startCity = "Pueblo, CO";
var reqCurrentURL = apiKey + startCity + "&days=7";
console.log(reqCurrentURL);

// Today's date
var todaysDate = document.querySelector(".current--date");
todaysDate.innerHTML = format(new Date(), "E MMM dd, yyyy");

var currentCity = document.querySelector(".heading-primary");
currentCity.textContent = `Current weather for: ${startCity}`;

// Create label objects and event listeners for unit buttons in top right
var metricBtn = document.querySelector(".btn-units-metric");
var englishBtn = document.querySelector(".btn-units-english");

var labelMetricUnits = document.querySelectorAll(".label-units-metric");
var labelForecastMetricUnits = document.querySelectorAll(
  ".forecast-labels-units.metric"
);
var labelEnglishUnits = document.querySelectorAll(".label-units-english");
var labelForecastEnglishUnits = document.querySelectorAll(
  ".forecast-labels-units.english"
);

var displayState = "english";

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
      let dataObject = new Data(response, startCity, todaysDate);
      processData(dataObject, displayState);
    })
    .catch(function (err) {
      console.log(`in submitBtn function line 54 and error is ${err}`);
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
  for (let label of labelMetricUnits) {
    label.classList.remove("display-on");
    label.classList.add("display-off");
  }
  fetch(reqCurrentURL, { mode: "cors" })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      let dataObject = new Data(response, startCity, todaysDate);
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
    localStorage.clear("weather");
    localStorage.setItem("weather", JSON.stringify(response));

    let dataObject = new Data(response, startCity, todaysDate);
    processData(dataObject, displayState);
  })
  .catch(function (err) {
    console.log(`Search error: ${err}`);
  });

// Gather search data from text input and create submitBtn event listener
var searchValue = document.querySelector(".search-item");
var submitBtn = document.querySelector(".search-btn");

submitBtn.addEventListener("click", function () {
  let searchStringEnd = searchValue.value;
  let city = searchStringEnd;
  // console.log(`searchStringEnd is ${searchStringEnd}`);

  reqCurrentURL = apiKey + searchStringEnd;
  // console.log(`the searchString is ${reqCurrentURL}`);

  let cityHeading = document.querySelector("h1");
  cityHeading.textContent = `Current weather for: ${city}`;

  fetch(reqCurrentURL, { mode: "cors" })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      let dataObject = new Data(response, startCity, todaysDate);
      processData(dataObject, displayState);
    })
    .catch(function (err) {
      console.log(`in submitBtn function line 119 and error is ${err}`);
    });
});

import { format } from "date-fns";
import { processData } from "./modules/processData";

// Define apiKey and the request URL
var apiKey =
  "https://api.weatherapi.com/v1/current.json?key=d50306b4b6774477b8f163431232406&q=";
console.log(`searthStringFront is ${apiKey}`);

var startCity = "Pueblo, CO";
var requestURL = apiKey + startCity;
console.log(`requestURL to start is ${requestURL}`);

var currentCity = document.querySelector(".heading-primary");
currentCity.textContent = `Current weather for: ${startCity}`;

// Today's date
var todaysDate = document.querySelector(".current--date");
todaysDate.innerHTML = format(new Date(), "E MMM dd, yyyy");

// Fetch a response from weather API for 'current' conditions
fetch(requestURL, { mode: "cors" })
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(
      `Current temperature in ${startCity} is ${response.current.temp_f}`
    );
    processData(response);
  })
  .catch(function (err) {
    console.log(`Search error: ${err}`);
  });

var searchValue = document.querySelector(".search-item");
var submitBtn = document.querySelector(".search-btn");

submitBtn.addEventListener("click", function () {
  let searchStringEnd = searchValue.value;
  let city = searchStringEnd;
  console.log(`searchStringEnd is ${searchStringEnd}`);

  requestURL = apiKey + searchStringEnd;
  console.log(`the searchString is ${requestURL}`);

  let cityHeading = document.querySelector("h1");
  cityHeading.textContent = `Current weather for: ${city}`;

  fetch(requestURL, { mode: "cors" })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response.current.temp_f);
      processData(response);
    })
    .catch(function (err) {
      console.log(`in submitBtn function line 55 and error is ${err}`);
    });
});

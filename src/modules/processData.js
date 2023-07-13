import { format } from "date-fns";

export function processData(data, displayState) {
  // Weather data //
  // console.log(`in processData line3 and the displayState is ${displayState}`);
  // console.log(
  //   `in processData line 4 and the current temperature is ${data.tempF}`
  // );

  // Retrieve current conditions icon for display
  let currentIcon = document.querySelector(".current-conditions-icon");
  // console.log(
  //   `in processData line 11 and the current conditions icon src is ${data.currentIconURL}`
  // );
  currentIcon.src = data.currentIconURL;

  if (displayState === "english") {
    var temp = data.tempF;
    var pressure = data.pressureIn;
    var humidity = data.humidity;
    var windSpeed = data.windSpeedMph;
    var airQuality = data.uv;

    // Assign background color from temperature color palette
    const searchBtn = document.body.querySelector(".search-btn");
    const searchItem = document.body.querySelector(".search-item");
    const formContainer = document.body.querySelector(".form--container");
    if (temp >= 110) {
      document.body.style.background =
        "linear-gradient(to top, rgb(249, 65, 68), rgba(249, 65, 68, 0.15))";
      searchBtn.style.backgroundColor = "rgba(249, 65, 68, 0.15)";
      searchItem.style.backgroundColor = "rgba(249, 65, 68, 0.15)";
      formContainer.style.backgroundColor = "rgba(249, 65, 68, 0.15)";
    } else if (temp >= 100 && temp < 110) {
      document.body.style.background =
        "linear-gradient(to top, rgb(243, 114, 44), rgba(243, 114, 44, 0.15))";
      searchBtn.style.backgroundColor = "rgba(243, 114, 44, 0.15)";
      searchItem.style.backgroundColor = "rgba(243, 114, 44, 0.15)";
      formContainer.style.backgroundColor = "rgba(243, 114, 44, 0.15)";
    } else if (temp >= 90 && temp < 100) {
      document.body.style.background =
        "linear-gradient(to top, rgb(248, 150, 30), rgba(248, 150, 30, 0.15))";
      searchBtn.style.backgroundColor = "rgba(248, 150, 30, 0.15)";
      searchItem.style.backgroundColor = "rgba(248, 150, 30, 0.15)";
      formContainer.style.backgroundColor = "rgba(248, 150, 30, 0.15)";
    } else if (temp >= 80 && temp < 90) {
      document.body.style.background =
        "linear-gradient(to top, rgb(249, 132, 74), rgba(249, 132, 74, 0.15))";
      searchBtn.style.backgroundColor = "rgba(249, 132, 74, 0.15)";
      searchItem.style.backgroundColor = "rgba(249, 132, 74, 0.15)";
      formContainer.style.backgroundColor = "rgba(249, 132, 74, 0.15)";
    } else if (temp >= 70 && temp < 80) {
      document.body.style.background =
        "linear-gradient(to top, rgb(249, 199, 79), rgba(249, 199, 79, 0.15))";
      searchBtn.style.backgroundColor = "rgba(249, 199, 79, 0.15)";
      searchItem.style.backgroundColor = "rgba(249, 199, 79, 0.15)";
      formContainer.style.backgroundColor = "rgba(249, 199, 79, 0.15)";
    } else if (temp >= 60 && temp < 70) {
      document.body.style.background =
        "linear-gradient(to top, rgb(144, 190, 109), rgba(144, 190, 109, 0.15))";
      searchBtn.style.backgroundColor = "rgba(144, 190, 109, 0.15))";
      searchItem.style.backgroundColor = "rgba(144, 190, 109, 0.15))";
      formContainer.style.backgroundColor = "rgba(144, 190, 109, 0.15))";
    } else if (temp >= 50 && temp < 60) {
      document.body.style.background =
        "linear-gradient(to top, rgb(67, 170, 139), rgba(67, 170, 139, 0.15))";
      searchBtn.style.backgroundColor = "rgba(67, 170, 139, 0.15))";
      searchItem.style.backgroundColor = "rgba(67, 170, 139, 0.15))";
      formContainer.style.backgroundColor = "rgba(67, 170, 139, 0.15))";
    } else if (temp >= 40 && temp < 50) {
      document.body.style.background =
        "linear-gradient(to top, rgb(77, 144, 142), rgba(77, 144, 142, 0.15))";
      searchBtn.style.backgroundColor = "rgba(77, 144, 142, 0.15))";
      searchItem.style.backgroundColor = "rgba(77, 144, 142, 0.15))";
      formContainer.style.backgroundColor = "rgba(77, 144, 142, 0.15))";
    } else {
      document.body.style.background =
        "linear-gradient(to top, rgb(87, 117, 144), rgba(87, 117, 144, 0.15)";
      searchBtn.style.backgroundColor = "rgba(87, 117, 144, 0.15)";
      searchItem.style.backgroundColor = "rgba(87, 117, 144, 0.15)";
      formContainer.style.backgroundColor = "rgba(87, 117, 144, 0.15)";
    }
  }

  if (displayState === "metric") {
    var temp = data.tempC;
    var pressure = data.pressureMb;
    var humidity = data.humidity;
    var windSpeed = data.windSpeedKph;
    var airQuality = data.uv;

    // Assign background color from temperature color palette
    if (temp >= 43.33) {
      document.body.style.background =
        "linear-gradient(to top, rgb(249, 65, 68), rgba(249, 65, 68, 0.15))";
      searchBtn.style.backgroundColor = "rgba(249, 65, 68, 0.15)";
      searchItem.style.backgroundColor = "rgba(249, 65, 68, 0.15)";
      formContainer.style.backgroundColor = "rgba(249, 65, 68, 0.15)";
    } else if (temp >= 37.77 && temp < 43.33) {
      document.body.style.background =
        "linear-gradient(to top, rgb(243, 114, 44), rgba(243, 114, 44, 0.15))";
      searchBtn.style.backgroundColor = "rgba(243, 114, 44, 0.15)";
      searchItem.style.backgroundColor = "rgba(243, 114, 44, 0.15)";
      formContainer.style.backgroundColor = "rgba(243, 114, 44, 0.15)";
    } else if (temp >= 32.22 && temp < 37.77) {
      document.body.style.background =
        "linear-gradient(to top, rgb(248, 150, 30), rgba(248, 150, 30, 0.15))";
      searchBtn.style.backgroundColor = "rgba(248, 150, 30, 0.15)";
      searchItem.style.backgroundColor = "rgba(248, 150, 30, 0.15)";
      formContainer.style.backgroundColor = "rgba(248, 150, 30, 0.15)";
    } else if (temp >= 26.66 && temp < 32.21) {
      document.body.style.background =
        "linear-gradient(to top, rgb(249, 132, 74), rgba(249, 132, 74, 0.15))";
      searchBtn.style.backgroundColor = "rgba(249, 132, 74, 0.15)";
      searchItem.style.backgroundColor = "rgba(249, 132, 74, 0.15)";
      formContainer.style.backgroundColor = "rgba(249, 132, 74, 0.15)";
    } else if (temp >= 21.11 && temp < 26.66) {
      document.body.style.background =
        "linear-gradient(to top, rgb(249, 199, 79), rgba(249, 199, 79, 0.15))";
      searchBtn.style.backgroundColor = "rgba(249, 199, 79, 0.15)";
      searchItem.style.backgroundColor = "rgba(249, 199, 79, 0.15)";
      formContainer.style.backgroundColor = "rgba(249, 199, 79, 0.15)";
    } else if (temp >= 15.55 && temp < 21.11) {
      document.body.style.background =
        "linear-gradient(to top, rgb(144, 190, 109), rgba(144, 190, 109, 0.15))";
      searchBtn.style.backgroundColor = "rgba(144, 190, 109, 0.15))";
      searchItem.style.backgroundColor = "rgba(144, 190, 109, 0.15))";
      formContainer.style.backgroundColor = "rgba(144, 190, 109, 0.15))";
    } else if (temp >= 10 && temp < 15.55) {
      document.body.style.background =
        "linear-gradient(to top, rgb(67, 170, 139), rgba(67, 170, 139, 0.15))";
      searchBtn.style.backgroundColor = "rgba(67, 170, 139, 0.15))";
      searchItem.style.backgroundColor = "rgba(67, 170, 139, 0.15))";
      formContainer.style.backgroundColor = "rgba(67, 170, 139, 0.15))";
    } else if (temp >= 4.44 && temp < 10) {
      document.body.style.background =
        "linear-gradient(to top, rgb(77, 144, 142), rgba(77, 144, 142, 0.15))";
      searchBtn.style.backgroundColor = "rgba(77, 144, 142, 0.15))";
      searchItem.style.backgroundColor = "rgba(77, 144, 142, 0.15))";
      formContainer.style.backgroundColor = "rgba(77, 144, 142, 0.15))";
    } else {
      document.body.style.background =
        "linear-gradient(to top, rgb(87, 117, 144), rgba(87, 117, 144, 0.15)";
      searchBtn.style.backgroundColor = "rgba(87, 117, 144, 0.15)";
      searchItem.style.backgroundColor = "rgba(87, 117, 144, 0.15)";
      formContainer.style.backgroundColor = "rgba(87, 117, 144, 0.15)";
    }
  }

  let tempDisplay = document.querySelector(".temp-data");
  tempDisplay.textContent = String(temp);

  let pressureDisplay = document.querySelector(".pressure-data");
  pressureDisplay.textContent = String(pressure);

  let humidityDisplay = document.querySelector(".humidity-data");
  humidityDisplay.textContent = String(humidity);

  let windSpeedDisplay = document.querySelector(".wind-speed-data");
  windSpeedDisplay.textContent = String(windSpeed);

  let airQualityDisplay = document.querySelector(".air-quality-data");
  airQualityDisplay.textContent = String(airQuality);

  let sunrise = document.querySelector(".sunrise-data");
  sunrise.textContent = String(data.sunrise);

  let sunset = document.querySelector(".sunset-data");
  sunset.textContent = String(data.sunset);

  //Forecast data
  let forecastDays = document.querySelectorAll(".forecast--date");
  let forecastHighTemps = document.querySelectorAll(".forecast--ht");
  let forecastLowTemps = document.querySelectorAll(".forecast--lt");
  let forecastPCRs = document.querySelectorAll(".forecast--pcr");
  let forecastMWSs = document.querySelectorAll(".forecast--mws");
  let forecastIcons = document.querySelectorAll(".forecast-icon");

  if (displayState === "english") {
    for (let i = 0; i <= 2; i++) {
      forecastDays[i].innerHTML = format(
        new Date(String(data.forecastData.forecastday[i].date)),
        "E MMM dd, yyyy"
      );
      forecastHighTemps[i].textContent =
        data.forecastData.forecastday[i].day.maxtemp_f;
      forecastLowTemps[i].textContent =
        data.forecastData.forecastday[i].day.mintemp_f;
      forecastPCRs[i].textContent =
        data.forecastData.forecastday[i].day.daily_chance_of_rain;
      forecastMWSs[i].textContent =
        data.forecastData.forecastday[i].day.maxwind_mph;
      let iconURL = data.forecastData.forecastday[i].day.condition.icon;
      console.log(`inside processData and the current iconURL is ${iconURL} `);
      forecastIcons[i].src = String(iconURL);
    }
  }
  if (displayState === "metric") {
    for (let i = 0; i <= 2; i++) {
      console.log(`inside processData line 63 and i is ${i}`);
      forecastDays[i].textContent = data.forecastData.forecastday[i].date;
      forecastHighTemps[i].textContent =
        data.forecastData.forecastday[i].day.maxtemp_c;
      forecastLowTemps[i].textContent =
        data.forecastData.forecastday[i].day.mintemp_c;
      forecastPCRs[i].textContent =
        data.forecastData.forecastday[i].day.daily_chance_of_rain;
      forecastMWSs[i].textContent =
        data.forecastData.forecastday[i].day.maxwind_kph;
      let iconURL = data.forecastData.forecastday[i].day.condition.icon;
      console.log(`inside processData and the current iconURL is ${iconURL} `);
      forecastIcons[i].src = String(iconURL);
    }
  }
}

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
  }

  if (displayState === "metric") {
    var temp = data.tempC;
    var pressure = data.pressureMb;
    var humidity = data.humidity;
    var windSpeed = data.windSpeedKph;
    var airQuality = data.uv;
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

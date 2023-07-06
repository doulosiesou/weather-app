export function processData(data, displayState) {
  // Weather data //
  console.log(`in processData line3 and the displayState is ${displayState}`);
  console.log(
    `in processData line 4 and the current temperature is ${data.tempF}`
  );

  // Retrieve current conditions icon for display
  let currentIcon = document.querySelector(".current-conditions-icon");
  console.log(
    `in processData line 11 and the current conditions icon src is ${data.currentIconURL}`
  );
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
}

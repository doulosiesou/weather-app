export function processData(data) {
  // Weather data //

  let temp = data.current.temp_f;
  let pressure = data.current.pressure_in;
  let humidity = data.current.humidity;
  let windSpeed = data.current.wind_mph;
  let airQuality = data.current.vis_miles;

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

export function processData(data, displayState) {
  // Weather data //
  console.log(`in processData and the displayState is ${displayState}`);

  let temp;
  let pressure;
  let humidity;
  let windSpeed;
  let airQuality;

  if (displayState === "english") {
    temp = data.current.temp_f;
    pressure = data.current.pressure_in;
    humidity = data.current.humidity;
    windSpeed = data.current.wind_mph;
    airQuality = data.current.vis_miles;
  }

  if (displayState === "metric") {
    temp = data.current.temp_c;
    pressure = data.current.pressure_mb;
    humidity = data.current.humidity;
    windSpeed = data.current.wind_kph;
    airQuality = data.current.vis_km;
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

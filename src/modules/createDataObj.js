export function Data(response, startCity, todaysDate) {
  // Current weather data
  this.currentIconURL = response.current.condition.icon;
  console.log(
    `inside createDataObj line 4 and the current icon url is ${this.currentIconURL}`
  );

  this.city = startCity;
  this.date = todaysDate;
  this.tempF = response.current.temp_f;
  console.log(`inside createDataObject line 12 and tempF is ${this.tempF} `);

  this.tempC = response.current.temp_c;
  this.pressureMb = response.current.pressure_mb;
  this.pressureIn = response.current.pressure_in;
  this.humidity = response.current.humidity;
  this.windSpeedMph = response.current.wind_mph;
  this.windSpeedKph = response.current.wind_kph;
  this.uv = response.current.uv;

  // Astro data
  let sunrise = document.querySelector(".sunrise-data");
  let sunset = document.querySelector(".sunset-data");
  sunrise.textContent = response.forecast.forecastday[0].astro.sunrise;
  sunset.textContent = response.forecast.forecastday[0].astro.sunset;

  return;
}

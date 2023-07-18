export function Data(response, startCity, todaysDate) {
  // Current weather data
  this.currentIconURL = response.current.condition.icon;
  console.log(
    `inside createDataObj line 4 and the current icon url is ${this.currentIconURL}`
  );

  this.city = startCity;
  this.date = todaysDate;
  this.tempF = response.current.temp_f;
  this.tempC = response.current.temp_c;
  this.pressureMb = response.current.pressure_mb;
  this.pressureIn = response.current.pressure_in;
  this.humidity = response.current.humidity;
  this.windSpeedMph = response.current.wind_mph;
  this.windSpeedKph = response.current.wind_kph;
  this.uv = response.current.uv;

  // Astro data
  this.sunrise = response.forecast.forecastday[0].astro.sunrise;
  this.sunset = response.forecast.forecastday[0].astro.sunset;

  // Forecast data
  this.forecastData = response.forecast;
  console.log(this.forecastData);

  return;
}

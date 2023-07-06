export function Data(response, startCity, todaysDate) {
  this.currentIconURL = response.current.condition.icon;
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

  console.log(`inside createDataObj and start city is ${this.city}`);
  console.log(`inside createDataObj and today's date is ${this.date}`);
  console.log(`inside createDataObj and the temperature is ${this.tempF}`);
  console.log(
    `inside createDataObj and the air pressure is ${this.pressureIn}`
  );
  console.log(`inside createDataObj and the humidity is ${this.humidity}`);
  console.log(
    `inside createDataObj and the wind speed is ${this.windSpeedMph}`
  );
  console.log(`inside createDataObj and the visibility is ${this.uv}`);

  return;
}

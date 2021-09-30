const request = require("request");
const forecast = (longitude, latitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=6e802745c2624a83796f6ef7124ab229&query=" +
    +latitude +
    "," +
    longitude +
    "&unit=f";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " degree out. It feels like " +
          body.current.feelslike +
          " degree"
      );
    }
  });
};

module.exports = forecast;

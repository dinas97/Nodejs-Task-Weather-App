require('dotenv').config({ quiet: true });
const request = require('request');
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

const forecast = (latitude, longitude, callback) => {
  if (!latitude || !longitude) {
    return callback('❌ Latitude and Longitude are required', undefined);
  }

  const weatherUrl = `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${latitude},${longitude}&aqi=no`;

  request({ url: weatherUrl, json: true }, (error, response) => {
    if (error) {
      callback(`❌ [Forecast] Network error:${error.message}`, undefined);
    } else if (!response || !response.body || response.body.error) {
      callback(
        `❌ [Forecast] API error: ${response.body.error.message}`,
        undefined,
      );
    } else {
      const data = response.body;
      const weatherInfo = {
        Country: data.location.country,
        City: data.location.name,
        Temperature: `${data.current.temp_c} °C`,
        Condition: data.current.condition.text,
      };

      callback(undefined, weatherInfo);
    }
  });
};

module.exports = forecast;

const forecast = require('./data/forecast');
const geocode = require('./data/geocode');

const country = process.argv[2];

if (!country) {
  console.log('❌ Please provide a country name as argument!');
  process.exit(1);
}

geocode(country, (geoError, locationData) => {
  if (geoError) {
    return console.log(geoError);
  }

  console.log('\n✅ Location found:\n');
  for (const key in locationData) {
    console.log(key, ':', locationData[key]);
  }

  forecast(
    locationData.Latitude,
    locationData.Longitude,
    (weatherError, weatherData) => {
      if (weatherError) {
        return console.log(weatherError);
      }

      console.log('\n===== Weather Info =====\n');
      for (const key in weatherData) {
        console.log(key, ':', weatherData[key]);
      }
    },
  );
});

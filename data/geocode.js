require('dotenv').config({ quiet: true });
const request = require('request');

const MAPTILER_KEY = process.env.MAPTILER_KEY;

const geocode = (countryName, callback) => {
  const geoUrl = `https://api.maptiler.com/geocoding/${countryName}.json?key=${MAPTILER_KEY}`;

  request({ url: geoUrl, json: true }, (error, response) => {
    if (error) {
      callback('❌ [Geocode] Unable to connect to service', undefined);
    } else if (
      typeof response.body === 'string' &&
      response.body.toLowerCase().includes('key')
    ) {
      callback(
        '❌ MAPTILER API key invalid! Check your MAPTILER_KEY in .env',
        undefined,
      );
    } else if (!response.body.features || response.body.features.length === 0) {
      callback('❌ [Geocode] Location not found', undefined);
    } else {
      const locationData = {
        Latitude: response.body.features[0].center[1],
        Longitude: response.body.features[0].center[0],
      };
      callback(undefined, locationData);
    }
  });
};

module.exports = geocode;

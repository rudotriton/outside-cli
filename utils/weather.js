/* eslint-disable no-console */
const axios = require('axios');

module.exports = async (location, apiKey, forecast = false) => {
  const api = forecast ? 'forecast' : 'weather';
  let results;
  try {
    results = await axios.get(
      `https://api.openweathermap.org/data/2.5/${api}`,
      {
        params: {
          q: location,
          APPID: apiKey,
        },
      },
    );
  } catch (e) {
    console.log(e);
  }
  return results.data;
};

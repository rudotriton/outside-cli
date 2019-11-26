const ora = require('ora');
const getWeather = require('../utils/weather');
const chalk = require('chalk');
const getApiKey = require('../utils/getApiKey');

module.exports = async (args) => {
  const spinner = ora().start();

  try {
    const location = args._[1] || undefined;
    const apiKey = await getApiKey();
    const weather = await getWeather(location, apiKey);

    spinner.stop();

    console.log(`
    Current conditions in ${chalk.yellow(location)}:
    `)
    console.log(`\t${(weather.main.temp - 273.15).toFixed(1)}°C and ${chalk.blue(weather.weather[0].description)}.
    `)
  } catch (err) {
    spinner.stop()

    console.error(err)
  }
}

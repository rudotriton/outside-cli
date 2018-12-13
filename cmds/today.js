const ora = require('ora');
const getWeather = require('../utils/weather');
const chalk = require('chalk');

module.exports = async (args) => {
  const spinner = ora().start();

  try {
    const location = args.location || args.l;
    const weather = await getWeather(location);

    spinner.stop();

    console.log(`
    Current conditions in ${chalk.yellow(location)}:
    `)
    console.log(`\t${weather.condition.temp}°C ${chalk.blue(weather.condition.text)}
    `)
  } catch (err) {
    spinner.stop()

    console.error(err)
  }
}

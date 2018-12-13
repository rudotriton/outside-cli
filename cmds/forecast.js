const ora = require('ora');
const getWeather = require('../utils/weather');
const chalk = require('chalk');

module.exports = async (args) => {
  const spinner = ora().start()

  try {
    const location = args.location || args.l;
    const weather = await getWeather(location);

    spinner.stop()

    console.log(`
    Forecast for ${chalk.yellow(location)}:
    `);
    
    weather.forecast.forEach(item =>
      console.log(
        `\t${item.date} - ${chalk.blue('Low')}: ${
          item.low >= 0 && item.low <= 9 ? '  ' + item.low : item.low <= -10 ? item.low : ' ' + item.low
        }° | ${chalk.red('High')}: ${
        item.high >= 0 && item.high <= 9 ? '  ' + item.high : item.high <= -10 ? item.high : ' ' + item.high
        }° | ${item.text}`
      )
    )
    //empty line befor ethe prompt is returned
    console.log();

  } catch (err) {
    spinner.stop();

    console.error(chalk.red(err));
  }
}
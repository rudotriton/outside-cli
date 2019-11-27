const ora = require('ora');
const getWeather = require('../utils/weather');
const chalk = require('chalk');
const getApiKey = require("../utils/getApiKey");

module.exports = async (args) => {
  const spinner = ora().start()

  try {
    const location = args._[1] || undefined; 
    const apiKey = await getApiKey();
    const weather = await getWeather(location, apiKey, true);

    spinner.stop()

    console.log(`
    Forecast for ${chalk.yellow(location)}:
    `);
    
    // finds the temp log for 12:00
    let middayIndex = -1;
    let i = 0;
    while (middayIndex === -1) {
      let ts = weather.list[i].dt_txt;
      if (ts.slice(11, 13) == '12') {
        middayIndex = i;
        break;
      }
      i += 1;
    }
    // Logs all of the mid day values
    for (let i = middayIndex; i < 40; i += 8) {
      const item = weather.list[i];
      const date = new Date(item.dt * 1000);
      const month = date.getMonth() + 1;
      const day = date.getDate().toString();
      console.log(
        `\t${chalk.bold(`${month}/${day.padStart(2, "0")}`)} - ${chalk.blue("Temp:")} ${(
          item.main.temp - 273.15
        )
          .toFixed(1)
          .padStart(4, " ")}°C - ${chalk.yellow("Condition:")} ${item.weather[0].description}`
      );
  }
  // empty line before the prompt is returned
    console.log();

  } catch (err) {
    spinner.stop();

    console.error(chalk.red(err.message));
  }
}
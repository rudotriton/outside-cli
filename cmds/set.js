const ora = require("ora");
const chalk = require("chalk");
const setApiKey = require("../utils/setApiKey");
const path = require('path');

module.exports = async (args) => {
  const spinner = ora().start();

  try {
    const apiKey = args._[1] || undefined;
    await setApiKey(apiKey);

    spinner.stop();

    console.log(`${chalk.green(`Your API key has been saved to: ${chalk.bold(path.resolve(process.env.HOME, '.outside-cli.json'))}`)}`);
  } catch (err) {
    spinner.stop();
    console.error(err.message);
  }
};

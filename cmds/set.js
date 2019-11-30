/* eslint-disable no-console */
const ora = require('ora');
const chalk = require('chalk');
const path = require('path');
const setApiKey = require('../utils/setApiKey');

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

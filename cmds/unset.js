/* eslint-disable no-console */
const ora = require('ora');
const chalk = require('chalk');
const path = require('path');
const unsetApiKey = require('../utils/unsetApiKey');

module.exports = async () => {
  const spinner = ora().start();

  try {
    await unsetApiKey();

    spinner.stop();

    console.log(
      `${chalk.green(
        `Your API key has been successfully removed from: ${chalk.bold(
          path.resolve(process.env.HOME, '.outside-cli.json'),
        )}`,
      )}`,
    );
  } catch (err) {
    spinner.stop();
    console.log(err.message);
  }
};

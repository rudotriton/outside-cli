const ora = require("ora");
const chalk = require("chalk");
const getApiKey = require("../utils/getApiKey");
const path = require("path");

module.exports = async () => {
  const spinner = ora().start();

  try {
    const key = await getApiKey();

    spinner.stop();

    console.log(
      `${chalk.green(
        `Your API key is: ${chalk.bold(key)}`
      )}`
    );
  } catch (err) {
    spinner.stop();
    console.log(err.message);
  }
};

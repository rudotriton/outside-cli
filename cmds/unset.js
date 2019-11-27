const ora = require("ora");
const chalk = require("chalk");
const unsetApiKey = require("../utils/unsetApiKey");
const path = require("path");

module.exports = async () => {
  const spinner = ora().start();

  try {
    await unsetApiKey();

    spinner.stop();

    console.log(
      `${chalk.green(
        `Your API key has been successfully removed from: ${chalk.bold(
          path.resolve(process.env.HOME, ".outside-cli.json")
        )}`
      )}`
    );
  } catch (err) {
    spinner.stop();
    console.log(err.message);
  }
};

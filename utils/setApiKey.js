const fs = require("fs");
const path = require("path");
const promisify = require("util").promisify;
const chalk = require("chalk");

const writeFileAsync = promisify(fs.writeFile);

module.exports = async (apiKey) => {
  if (apiKey === undefined) {
    throw new Error(
      chalk.red(
        'No api key was supplied.'
      )
    );
  }
  try {
    const obj = {
      apiKey,
    }
    await writeFileAsync(
      path.resolve(process.env.HOME, ".outside-cli.json"),
      JSON.stringify(obj, null, 2), 'utf8'
    );
  } catch (_) {
    throw new Error(
      chalk.red(
        'Could not write api key to config.\n\tFor further info run "outside help set"'
      )
    );
  }
};

const fs = require("fs");
const path = require("path");
const promisify = require("util").promisify;
const chalk = require("chalk");

const unlinkAsync = promisify(fs.unlink);

module.exports = async () => {
  try {
    await unlinkAsync(
      path.resolve(process.env.HOME, ".outside-cli.json"));
  } catch (_) {
    throw new Error(
      chalk.red('Could not remove API key.\n\tFor further info run "outside help unset"')
    );
  }
};

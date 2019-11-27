const fs = require('fs');
const path = require('path');
const promisify = require('util').promisify;
const chalk = require('chalk');

const readFileAsync = promisify(fs.readFile);

module.exports = async () => {
  let file;
  try {
    file = await readFileAsync(path.resolve(process.env.HOME, '.outside-cli.json'));
  } catch (_) {
    throw new Error(chalk.red('No API key found. Set an API key first by running "outside set <API_KEY>"\n\tFor further info run "outisde help set"'));
  }
  return JSON.parse(file).apiKey;
}
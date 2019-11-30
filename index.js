const minimist = require('minimist');
const chalk = require('chalk');
const error = require('./utils/error');
const today = require('./cmds/today');
const forecast = require('./cmds/forecast');
const set = require('./cmds/set');
const unset = require('./cmds/unset');
const get = require('./cmds/get');
const version = require('./cmds/version');
const help = require('./cmds/help');

module.exports = () => {
  const args = minimist(process.argv.slice(2));

  let cmd = args._[0] || 'help';

  if (args.version || args.v) {
    cmd = 'version';
  }

  if (args.help || args.h) {
    cmd = 'help';
  }

  switch (cmd) {
    case 'today':
      today(args);
      break;

    case 'forecast':
      forecast(args);
      break;

    case 'set':
      set(args);
      break;

    case 'get':
      get();
      break;

    case 'unset':
      unset();
      break;

    case 'version':
      version();
      break;

    case 'help':
      help(args);
      break;

    default:
      error(chalk.red(`"${cmd}" is not a valid command!`));
      break;
  }
};

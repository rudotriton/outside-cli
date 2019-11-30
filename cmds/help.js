const chalk = require('chalk');
const path = require('path');

const menus = {
  main: `
    ${chalk.bold("outside")} ${chalk.blue("[command]")} ${chalk.dim(
    "<options>"
  )}

    ${chalk.blue("today")} .............. show weather for today
    ${chalk.blue("forecast")} ........... show weather for the next 10 days

    ${chalk.blue("set")} ................ set API key
    ${chalk.blue("get")} ................ print already set API key
    ${chalk.blue("unset")} .............. delete already set API key
    
    ${chalk.blue("version")} ............ show package version
    ${chalk.blue("help")} ............... show help menu for a command

    ${chalk.dim("For further information run: ")}
    ${chalk.bold("outside help [command]")}
    `,

  today: `
    ${chalk.bold("outside")} ${chalk.bold("today")} ${chalk.blue("<location>")}

    ${chalk.blue("For example:")}
    ${chalk.bold("outside today London")}
    `,

  forecast: `
    ${chalk.bold("outside")} ${chalk.bold("forecast")} ${chalk.blue(
    "<location>"
  )}

    ${chalk.blue("For example:")}
    ${chalk.bold("outside forecast London")}
    `,

  unset: `
    ${chalk.bold("outside unset")}
    
    This command removes the API key by deleting the file at: ${chalk.blue(
      path.resolve(process.env.HOME, ".outside-cli.json")
    )}. It may fail if the file does not exist at this location.
  `,

  set: `
    ${chalk.bold("outside set")} ${chalk.blue("<API_KEY>")}
    
    The API key is from ${chalk.blue(
      "https://openweathermap.org"
    )} and is for "Current Weather Data". You would need to create an account for an API key. The key is saved to ${chalk.blue(
    path.resolve(process.env.HOME, ".outside-cli.json")
  )}.
  `,

  get: `
    ${chalk.bold("outside get")}
    
    This command prints out your currently set API key, if you have the need to check what it is. The API key can be found in ${chalk.blue(
      path.resolve(process.env.HOME, ".outside-cli.json")
    )}.
  `,

  version: `
    ${chalk.bold(`Try 'outside -v' or 'outside --version' instead.`)}
  `,

  help: `
    ${chalk.bold(
      `There is no additional help. Try 'outside help' or 'outside -h' instead.`
    )}
  `,
};

// if the args._[0] is 'help' 
// 'outside help' means that args._[0] === 'help'
// this means that we use args._[1] which may not exist
// as a result menus[subCmd] === false and we print menus.main
// if args._[1] exists we print menus[args._[1]]
// for example menus['today'] is the same as menus.today

module.exports = (args) => {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]

  console.log(menus[subCmd] || menus.main)
}
const menus = {
  main: `
    outside [command] <options>

    today .............. show weather for today
    version ............ show package version
    help ............... show help menu for a command`,

  today: `
    outside today <options>

    --location, -l ..... the location to use`,
    
  forecast: `
    outside forecast <options>

    --location, -l ..... the location to use`,
}

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
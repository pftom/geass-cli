const commander = require('commander');

commander
  .command('new <projectName>')
  .action((projectName, cmd) => {
    init(projectName);
  });

commander.parse( process.argv );

function init ( projectName   ) {

}
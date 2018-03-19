const path = require('path');
const commander = require('commander');
const fs = require('fs');
const chalk = require('chalk');
const packageJson = require('./package.json');

commander
  .version(packageJson.version)
  .usage('[command] projectName')
  .parse(process.argv);

if (!commander.args[0]) {
  commander.help();
} else {
  const dest = path.join(process.cwd(), commander.args[1]);

  if (fs.existsSync(dest)) {
    console.error(chalk.red('Existing directory here, please run new command for an inexistence folder!'));
    process.exit(1);
  }

  fs.mkdirSync(dest);
  process.chdir(dest);
}




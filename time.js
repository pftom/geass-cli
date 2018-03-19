const commander = require('commander');

commander
  .version('0.1.0')
  .usage('[options] <file ...>')
  .option('-i, --integer <a>..<b>', 'An integer argument', parseInt)
  .parse(process.argv);

console.log(' int: %j', commander.integer);

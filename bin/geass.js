const commander = require('commander');
const spawn = require('cross-spawn');
const path = require('path');
const fs = require('fs');

// Notify update when process exits
const updateNotifier = require('update-notifier');
const pkg = require('../package.json');

updateNotifier({ pkg }).notify();

function printHelp() {
  console.log(' Commands:');
  console.log();
  console.log('   new           Create a new application');
  console.log('   generate      Generate a new standard component (short-cut: "g")');
  console.log('   test          Generate a suit of tests for a component (args: "componentName")');
  console.log();
  console.log('All commands can be run with -h (or --help) for more information.');
}

commander
  .version(pkg.version, '-v, --version')
  .usage('<command> [options]')
  .on('--help', printHelp)
  .parse(process.argv);

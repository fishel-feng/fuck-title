#! /usr/bin/env node
const program = require('commander')

program
  .option('-t, --title <title>', 'set title (required)')
  .option('-n, --times <n>', 'set fuck times (number)', parseInt)
  .version('0.1.0')
  .usage('fx109138')
  .parse(process.argv)

const fuckTitle = (title, n = 0) => n <= 0 ? `${title}` : fuckTitle(`驳 《${title}》`, --n)

const validParam = (title, n) => !title || (n !== undefined && isNaN(n));

validParam(program.title, program.times) ? console.log(program.help()) : console.log(fuckTitle(program.title, program.times))

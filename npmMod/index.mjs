import chalk from 'chalk';
import validator from 'validator';
console.log(chalk.green.underline.inverse('Hello world!'));
const res=validator.isEmail("thapa@thapa.com");
console.log(res?chalk.green.inverse(res):chalk.red.inverse(res));



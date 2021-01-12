import chalk from 'chalk';
import { format } from 'date-fns';
import { createConnection } from 'typeorm';

if (process.env.NODE_ENV !== 'test') {
  createConnection()
    .then(() => {
      const fullHour = format(Date.now(), 'HH:mm:ss');

      const startMessage =
        '[' +
        chalk.green('DATABASE') +
        '] ' +
        chalk.gray.bold(fullHour) +
        chalk.green(` Connected to database`);

      console.log(startMessage);
    })
    .catch((error) => {
      const fullHour = format(Date.now(), 'HH:mm:ss');

      const errorMessage =
        '[' +
        chalk.red('DATABASE') +
        '] ' +
        chalk.gray.bold(fullHour) +
        chalk.red(` Database error`);

      console.log(errorMessage);
      console.log(error);
    });
}

import chalk from 'chalk';
import { format } from 'date-fns';

export function getTime(): string {
  const now = format(Date.now(), 'HH:mm:ss');
  return now;
}

export function getEmptyHostMsg(): string {
  const now = getTime();
  const msg =
    '[' +
    chalk.yellow('SERVER') +
    '] ' +
    chalk.gray.bold(now) +
    chalk.yellow(
      ` HOST enviroment variable is undefined. Using default: (http://localhost:3000/)`,
    );

  return msg;
}

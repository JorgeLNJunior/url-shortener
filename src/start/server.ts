import chalk from 'chalk';
import { format } from 'date-fns';
import { createHttpTerminator } from 'http-terminator';
import mongoose from 'mongoose';

import app from './app';

const port = parseInt(process.env.PORT as string) || 3000;

const server = app.listen(port, async () => {
  const fullHour = format(Date.now(), 'HH:mm:ss');

  const startMessage =
    '[' +
    chalk.green('SERVER') +
    '] ' +
    chalk.gray.bold(fullHour) +
    chalk.green(` Listening at port ${port}`);

  const dbMessage =
    '[' +
    chalk.green('DATABASE') +
    '] ' +
    chalk.gray.bold(fullHour) +
    chalk.green(` Connected to database`);

  const dbErrorMessage =
    '[' +
    chalk.red('DATABASE') +
    '] ' +
    chalk.gray.bold(fullHour) +
    chalk.red(` Database error`);

  console.log(startMessage);

  const mongoURI = process.env.MONGO_URI || 'mongodb://localhost/db';

  await mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() => {
      console.log(dbMessage);
    })
    .catch((error) => {
      console.log(dbErrorMessage);
      console.log(error);
    });

  if (process.env.NODE_ENV === 'production') {
    process.on('SIGTERM', async () => {
      const closeMessage =
        '[' +
        chalk.green('SERVER') +
        '] ' +
        chalk.gray.bold(fullHour) +
        chalk.green(` Closing the server`);

      console.log(closeMessage);

      const httpTerminator = createHttpTerminator({ server: server });
      await httpTerminator.terminate();
    });
  }
});

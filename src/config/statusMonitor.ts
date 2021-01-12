import { NextFunction, Request, Response } from 'express';
import statusMonitor from 'express-status-monitor';
import { createConnection } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('../config/database');

export const monitor = statusMonitor({
  path: '/admin/status',
  ignoreStartsWith: 'status',
  healthChecks: [
    {
      host: process.env.HOST || 'localhost',
      path: '/admin/health/database',
      port: process.env.PORT || 3000,
      protocol: 'http',
    },
  ],
});

export const dbHealthRoute = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<unknown> => {
  try {
    const connection = await createConnection({ name: 'health', ...config });
    await connection.query('SELECT * FROM user LIMIT 1');
    await connection.close();
    return res.status(200).json({ status: 200, message: 'ok' });
  } catch (error) {
    next(error);
  }
};

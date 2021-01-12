import expressWinston from 'express-winston';
import winston from 'winston';

export const logger = expressWinston.logger({
  transports: [new winston.transports.File({ filename: 'logs/logs.json' })],
  format: winston.format.combine(winston.format.json()),
  ignoredRoutes: [
    '/docs',
    '/admin/status',
    '/admin/health/database',
    '/socket.io',
  ],
});

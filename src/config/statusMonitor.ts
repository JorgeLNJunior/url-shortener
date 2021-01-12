import { Request, Response } from 'express';
import statusMonitor from 'express-status-monitor';
import mongoose from 'mongoose';

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
): Promise<unknown> => {
  try {
    const mongoURI = process.env.MONGO_URI || 'mongodb://localhost/db';

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    await mongoose.disconnect();
    return res.status(200).json({ status: 200, message: 'ok' });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, message: 'database error', error: [error] });
  }
};

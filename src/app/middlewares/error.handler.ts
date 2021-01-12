import { NextFunction, Request, Response } from 'express';

import { HttpError } from '../error/http.error';

export const errorHandler = (
  error: HttpError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
): unknown => {
  const response = {
    status: error.status || 500,
    message: error.message || 'internal error',
    errors: error.errors || [],
  };

  return res.status(response.status).json(response);
};

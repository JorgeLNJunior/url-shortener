import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';

import { User } from '../entity/user.entity';

export async function validateToken(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void | Response<unknown>> {
  const auth = req.headers.authorization;

  if (!auth) {
    return res.status(401).json({
      status: 401,
      message: 'unauthorized',
      errors: ['token not provided'],
    });
  }

  const [, token] = auth.split(' ');

  try {
    const secret = process.env.APP_SECRET;
    const decoded = jwt.verify(token, secret as string);

    const userRepository = getRepository(User);
    const user = await userRepository.findOne((decoded as AuthToken).uuid);
    req.user = user;
  } catch (error) {
    return res.status(401).json({
      status: 401,
      message: 'unauthorized',
      errors: ['invalid token'],
    });
  }
  return next();
}

type AuthToken = {
  uuid: string;
};

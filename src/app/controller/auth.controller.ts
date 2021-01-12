import { NextFunction, Request, Response } from 'express';

import { BadRequestError } from '../error/badRequest.error';
import { AuthService } from '../service/auth.service';
import { AuthValidator } from '../validator/auth.validator';
import { UserValidator } from '../validator/user.validator';

export class AuthController {
  async register(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<unknown> | undefined> {
    try {
      const userValidator = new UserValidator();
      const authService = new AuthService();

      const { error, value } = userValidator.create(req.body);

      if (error) throw new BadRequestError([error.message]);

      const user = await authService.register(value);

      return res.status(201).json({ user: user });
    } catch (error) {
      next(error);
    }
  }

  async login(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<unknown> | undefined> {
    try {
      const authService = new AuthService();
      const authValidator = new AuthValidator();

      const { error, value } = authValidator.login(req.body);

      if (error) throw new BadRequestError([error.message]);

      const token = await authService.login(value);

      return res.json({ token });
    } catch (error) {
      next(error);
    }
  }
}

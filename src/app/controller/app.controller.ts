import { NextFunction, Request, Response } from 'express';

import { BadRequestError } from '../error/badRequest.error';
import { AppService } from '../service/app.service';
import { UrlValidator } from '../validator/url.validator';

export class AppController {
  async shorten(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<unknown> | undefined> {
    const appService = new AppService();
    const urlValidator = new UrlValidator();
    const body = req.body;

    try {
      const { error, value } = urlValidator.validate(body);

      if (error) throw new BadRequestError([error.message]);

      const shortUrl = await appService.shorten({ url: value.url });

      return res.status(201).json({ status: 201, url: shortUrl });
    } catch (error) {
      next(error);
    }
  }
}

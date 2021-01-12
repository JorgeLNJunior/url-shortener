import { Request, Response } from 'express';

import { UsersService } from '../service/users.service';

export class UsersController {
  async get(req: Request, res: Response): Promise<Response> {
    const usersService = new UsersService();
    const users = await usersService.get();

    return res.json({
      status: 200,
      users: users,
    });
  }
}

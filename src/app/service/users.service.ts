import { getRepository } from 'typeorm';

import { User } from '../entity/user.entity';

export class UsersService {
  async get(): Promise<User[]> {
    const usersRepository = getRepository(User);
    return await usersRepository.find();
  }
}

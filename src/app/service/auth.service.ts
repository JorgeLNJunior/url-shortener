import bcrypt from 'bcrypt';
import { DeepPartial, getRepository } from 'typeorm';

import { sign } from '../auth/jwt';
import { User } from '../entity/user.entity';
import { BadRequestError } from '../error/badRequest.error';
import { UnauthorizedError } from '../error/unauthorized.error';

export class AuthService {
  async register(userData: DeepPartial<User>): Promise<User> {
    const usersRepository = getRepository(User);

    const user = usersRepository.create(userData);
    return await usersRepository.save(user);
  }

  async login(loginData: LoginData): Promise<string> {
    const { email, password } = loginData;
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ where: { email: email } });

    if (!user) throw new BadRequestError(['user not found']);

    const isSamePassword = await bcrypt.compare(password, user.password);

    if (!isSamePassword) throw new UnauthorizedError(['invalid credentials']);

    const token = sign(user);

    return token;
  }
}

type LoginData = {
  email: string;
  password: string;
};

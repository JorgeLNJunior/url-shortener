import jwt from 'jsonwebtoken';

import { User } from '../entity/user.entity';

export function sign(user: User): string {
  const secret = process.env.APP_KEY || 'xHBpZ5Kbac';

  return jwt.sign({ uuid: (user as User).uuid }, secret, { expiresIn: '1d' });
}

import { User } from '../../app/entity/user.entity';

declare global {
  namespace Express {
    interface Request {
      user: User | undefined;
    }
  }
}

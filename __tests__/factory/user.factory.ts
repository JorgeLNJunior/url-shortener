import Faker from 'faker';
import { getRepository } from 'typeorm';

import { User } from '../../src/app/entity/user.entity';

export class UserFactory {
  private user: UserData = {
    name: Faker.name.findName(),
    email: Faker.internet.email(),
    password: Faker.internet.password(6),
  };

  static aUser(): UserFactory {
    return new UserFactory();
  }

  withInvalidEmail(): UserFactory {
    this.user.email = 'invalidmail';
    return this;
  }

  withoutName(): UserFactory {
    delete this.user.name;
    return this;
  }

  withShortPassword(): UserFactory {
    this.user.password = Faker.internet.password(4);
    return this;
  }

  withoutEmail(): UserFactory {
    delete this.user.email;
    return this;
  }

  withoutPassword(): UserFactory {
    delete this.user.password;
    return this;
  }

  withEmail(email: string): UserFactory {
    this.user.email = email;
    return this;
  }

  withPasword(password: string): UserFactory {
    this.user.password = password;
    return this;
  }

  async persist(): Promise<User> {
    const repository = getRepository(User);
    const user = repository.create(this.user);
    return await repository.save(user);
  }

  build(): UserData {
    return this.user;
  }
}

type UserData = {
  name?: string;
  email?: string;
  password?: string;
};

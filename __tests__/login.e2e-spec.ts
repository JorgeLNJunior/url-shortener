import request from 'supertest';
import { Connection, createConnection } from 'typeorm';

import app from '../src/start/app';
import { UserFactory } from './factory/user.factory';

describe('Login (e2e)', () => {
  let connection: Connection;

  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();
  });

  test('/login (POST) should authenticate a user with valid credentials', async () => {
    const password = '123456';
    const user = await UserFactory.aUser().withPasword(password).persist();

    const { body, status } = await request(app).post('/login').send({
      email: user.email,
      password: password,
    });

    expect(status).toBe(200);
    expect(body).toHaveProperty('token');
  });

  test('/login (POST) should not authenticate a user with invalid credentials', async () => {
    const user = await UserFactory.aUser().persist();

    const { status } = await request(app).post('/login').send({
      email: user.email,
      password: 'wrong-password',
    });

    expect(status).toBe(401);
  });

  test('/login (POST) should not authenticate a user with unregistered email', async () => {
    const user = UserFactory.aUser().build();

    const { status } = await request(app).post('/login').send({
      email: user.email,
      password: user.password,
    });

    expect(status).toBe(400);
  });

  afterAll(async () => {
    await connection.undoLastMigration();
    await connection.query('DROP TABLE IF EXISTS typeorm_migrations');
    await connection.close();
  });
});

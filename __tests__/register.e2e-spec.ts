import request from 'supertest';
import { Connection, createConnection } from 'typeorm';

import app from '../src/start/app';
import { UserFactory } from './factory/user.factory';

describe('Register (e2e)', () => {
  let connection: Connection;

  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();
  });

  test('/register (POST) should register a user with valid credentials', async () => {
    const userData = UserFactory.aUser().build();

    const response = await request(app).post('/register').send(userData);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('user');
  });

  test('/register (POST) should not register a user with invalid email', async () => {
    const userData = UserFactory.aUser().withInvalidEmail().build();

    const response = await request(app).post('/register').send(userData);

    expect(response.status).toBe(400);
  });

  test('/register (POST) should not register a user without a email', async () => {
    const userData = UserFactory.aUser().withoutEmail().build();

    const response = await request(app).post('/register').send(userData);

    expect(response.status).toBe(400);
  });

  test('/register (POST) should not register a user without a name', async () => {
    const userData = UserFactory.aUser().withoutName().build();

    const response = await request(app).post('/register').send(userData);

    expect(response.status).toBe(400);
  });

  test('/register (POST) should not register a user without a password', async () => {
    const userData = UserFactory.aUser().withoutName().build();

    const response = await request(app).post('/register').send(userData);

    expect(response.status).toBe(400);
  });

  test('/register (POST) should not register a user with a password less than 6 characters', async () => {
    const userData = UserFactory.aUser().withShortPassword().build();

    const response = await request(app).post('/register').send(userData);

    expect(response.status).toBe(400);
  });

  afterAll(async () => {
    await connection.undoLastMigration();
    await connection.query('DROP TABLE IF EXISTS typeorm_migrations');
    await connection.close();
  });
});

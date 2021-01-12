import request from 'supertest';
import { Connection, createConnection } from 'typeorm';

import app from '../src/start/app';

describe('Users (e2e)', () => {
  let connection: Connection;

  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();
  });

  test('/users (GET) should return 200 and users property', async () => {
    const response = await request(app).get('/users');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('users');
  });

  test('/notFound (GET) should return 404 if route does not exist', async () => {
    const response = await request(app).get('/notFound');

    expect(response.status).toBe(404);
  });

  afterAll(async () => {
    await connection.undoLastMigration();
    await connection.query('DROP TABLE IF EXISTS typeorm_migrations');
    await connection.close();
  });
});

/* eslint-disable jest/expect-expect */
import mongoose from 'mongoose';
import request from 'supertest';

import app from '../src/start/app';
import { UrlFactory } from './factory/url.factory';

describe('App (e2e)', () => {
  beforeAll(async () => {
    const mongoURI = process.env.MONGO_URI || 'mongodb://localhost/db';

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
  });

  test('/shorten (POST) should return 201 and url property', async () => {
    const data = UrlFactory.aUser().build();
    const { status, body } = await request(app).post(`/shorten`).send(data);

    expect(status).toBe(201);
    expect(body).toHaveProperty('url');
  });

  test('/shorten (POST) should return 400 if url is undefined', async () => {
    const data = UrlFactory.aUser().withoutUrl().build();
    const { status, body } = await request(app).post(`/shorten`).send(data);

    expect(status).toBe(400);
    expect(body).toHaveProperty('errors');
  });

  test('/redirect (GET) should return 302 and redirect to original url', async () => {
    const { slug, original } = await UrlFactory.aUser()
      .withUrl('https://google.com')
      .persist();

    await request(app).get(`/${slug}`).expect(302).expect('Location', original);
  });

  test('/notFound (GET) should return 404 if route does not exist', async () => {
    const { status } = await request(app).get('/notFound');

    expect(status).toBe(404);
  });

  afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.disconnect();
  });
});

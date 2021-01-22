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
    const data = UrlFactory.aUrl().build();
    const { status, body } = await request(app).post(`/shorten`).send(data);

    expect(status).toBe(201);
    expect(body).toHaveProperty('url');
  });

  test('/shorten (POST) should return 400 if url is undefined', async () => {
    const data = UrlFactory.aUrl().withoutUrl().build();
    const { status, body } = await request(app).post(`/shorten`).send(data);

    expect(status).toBe(400);
    expect(body).toHaveProperty('errors');
  });

  test('/redirect (GET) should return 302 and redirect to original url', async () => {
    const { slug, original } = await UrlFactory.aUrl()
      .withUrl('https://google.com')
      .persist();

    await request(app).get(`/${slug}`).expect(302).expect('Location', original);
  });

  test('/notFound (GET) should return 404 if route does not exist', async () => {
    const { status } = await request(app).get('/notFound');

    expect(status).toBe(404);
  });

  test('/shorten (POST) should return 201 and persist with custom slug', async () => {
    const data = UrlFactory.aUrl().withCustomSlug('custom').build();
    const { status, body } = await request(app).post(`/shorten`).send(data);

    expect(status).toBe(201);
    expect(body.url.slug).toBe(data.slug);
  });

  test('/shorten (POST) should remove white spaces from custom slug', async () => {
    const slug = 's5le I18';
    const data = UrlFactory.aUrl().withCustomSlug(slug).build();
    const { status, body } = await request(app).post(`/shorten`).send(data);

    expect(status).toBe(201);
    expect(body.url.slug).toBe(slug.replace(' ', ''));
  });

  test('/shorten (POST) should return 400 if slug length is greater than 15', async () => {
    const slug = 's5le2OI18e3CcNm8';
    const data = UrlFactory.aUrl().withCustomSlug(slug).build();
    const { status, body } = await request(app).post(`/shorten`).send(data);

    expect(status).toBe(400);
    expect(body).toHaveProperty('errors');
  });

  test('/shorten (POST) should return 400 if slug length is less than 5', async () => {
    const slug = 's5le';
    const data = UrlFactory.aUrl().withCustomSlug(slug).build();
    const { status, body } = await request(app).post(`/shorten`).send(data);

    expect(status).toBe(400);
    expect(body).toHaveProperty('errors');
  });

  afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.disconnect();
  });
});

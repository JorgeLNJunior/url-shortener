import Faker from 'faker';

import { NotFoundError } from '../error/notFound.error';
import Url, { IUrl } from '../model/url.model';

export class AppService {
  async shorten(params: ShortenParams): Promise<IUrl> {
    const { url } = params;
    const host =
      process.env.HOST !== undefined
        ? process.env.HOST
        : 'http://localhost:3000';

    const ramdomString = Faker.random.alphaNumeric(5);

    const shortUrl = await Url.create({
      original: url,
      short: host + '/' + ramdomString,
      slug: ramdomString,
    });

    return shortUrl;
  }

  async getBySlug(slug: string): Promise<IUrl> {
    const url = await Url.findOne({ slug: slug });

    if (!url)
      throw new NotFoundError([`url with slug "${slug}" was not found`]);

    return url;
  }
}

type ShortenParams = {
  url: string;
};

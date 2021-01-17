import Faker from 'faker';

import Url, { IUrl } from '../../src/app/model/url.model';

export class UrlFactory {
  private data: UrlData = {
    url: Faker.internet.url(),
  };

  static aUser(): UrlFactory {
    return new UrlFactory();
  }

  build(): UrlData {
    return this.data;
  }

  async persist(): Promise<IUrl> {
    const host = 'http://localhost:3000';
    const ramdomString = Faker.random.alphaNumeric(5);

    const url = await Url.create({
      original: this.data.url,
      short: host + '/' + ramdomString,
      slug: ramdomString,
    });

    return url;
  }

  withUrl(url: string): UrlFactory {
    this.data.url = url;
    return this;
  }

  withoutUrl(): UrlFactory {
    delete this.data.url;
    return this;
  }
}

type UrlData = {
  url?: string;
};

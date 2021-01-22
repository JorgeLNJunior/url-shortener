import Faker from 'faker';

import Url, { IUrl } from '../../src/app/model/url.model';

export class UrlFactory {
  private data: UrlData = {
    url: Faker.internet.url(),
    slug: undefined,
  };

  static aUrl(): UrlFactory {
    return new UrlFactory();
  }

  build(): UrlData {
    return this.data;
  }

  async persist(): Promise<IUrl> {
    const host = 'http://localhost:3000';
    const slug = this.data.slug || Faker.random.alphaNumeric(5);

    const url = await Url.create({
      original: this.data.url,
      short: host + '/' + slug,
      slug: slug,
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

  withCustomSlug(slug: string): UrlFactory {
    this.data.slug = slug;
    return this;
  }

  withRamdomSlug(): UrlFactory {
    const ramdomString = Faker.random.alphaNumeric(5);
    this.data.slug = ramdomString;
    return this;
  }
}

type UrlData = {
  url?: string;
  slug?: string;
};

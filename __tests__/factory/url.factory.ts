import Faker from 'faker';

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

  withoutUrl(): UrlFactory {
    delete this.data.url;
    return this;
  }
}

type UrlData = {
  url?: string;
};

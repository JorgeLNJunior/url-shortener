import { Document, model, Schema } from 'mongoose';

export interface IUrl extends Document {
  originalUrl: string;
  shortUrl: string;
}

const UrlSchema = new Schema(
  {
    original: String,
    short: String,
    slug: String,
  },
  { timestamps: true, versionKey: false },
);

export default model<IUrl>('Url', UrlSchema);

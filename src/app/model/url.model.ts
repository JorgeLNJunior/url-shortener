import { Document, model, Schema } from 'mongoose';

export interface IUrl extends Document {
  original: string;
  short: string;
  slug: string;
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

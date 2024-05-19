import { Document } from 'mongoose';

export interface ShortUrl extends Document {
  readonly hash: string;
  readonly url: string;
}
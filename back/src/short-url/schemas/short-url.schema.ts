import * as mongoose from 'mongoose';

export const ShortUrlSchema = new mongoose.Schema({
    hash: {type: String, required: true},
    url: { type: String, required: true},
  });
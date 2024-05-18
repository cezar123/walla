import { Connection } from 'mongoose';
import { ShortUrlSchema } from './schemas/short-url.schema';


// todo - move SHORT_URL_MODEL and DATABASE_CONNECTION in a constants.ts file

export const shortUrlProviders = [
  {
    provide: 'SHORT_URL_MODEL',
    useFactory: (connection: Connection) => connection.model('ShortUrl', ShortUrlSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
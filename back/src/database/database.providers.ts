import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://cezar:JOSuIrzK4tyH2uvF@cluster0.v2e7aob.mongodb.net/short_url?retryWrites=true&w=majority&appName=Cluster0',
        { serverApi: { version: '1', strict: true, deprecationErrors: true } }
         )
  },
];
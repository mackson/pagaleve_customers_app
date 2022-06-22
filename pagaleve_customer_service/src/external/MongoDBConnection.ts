import { DataSource } from 'typeorm';
export class MongoDBConnection {

  public async start(): Promise<DataSource> {
    try{

      /*
        host: process.env.PLS_HOST,
        port: process.env.PLS_PORT,
        database: process.env.DATABASE,
      */

      const AppDataSource = new DataSource({
        type: 'mongodb',
        host: 'localhost',
        port: 27017,
        database: 'pagaleve',
        entities: ['src/entities/**/*.ts'],
        useUnifiedTopology: true
      });

      await AppDataSource.initialize();
      
      return AppDataSource;

    }catch(error){
      return error.message;
    }
  }
}

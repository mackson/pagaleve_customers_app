import { DataSource } from 'typeorm';
import { Customer } from '../entities/Customer';
import 'dotenv/config';
export class MongoDBConnection {

  public async start(): Promise<DataSource> {
    try{

      const AppDataSource = new DataSource({
        type: 'mongodb',
        host: process.env.PAGALEVE_HOST,
        port: Number(process.env.PAGALEVE_PORT),
        database: process.env.PAGALEVE_DATABASE,
        entities: [Customer],
        useUnifiedTopology: true
      });

      await AppDataSource.initialize();
      
      return AppDataSource;

    }catch(error){
      return error.message;
    }
  }
}

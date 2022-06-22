import { Customer } from '../entities/Customer';
import { ICustomerRepository } from '../repositories/ICustomerRepository';
import { MongoDBConnection } from '../external/MongoDBConnection';
import { ObjectID } from 'mongodb';
export class MongoCustomerRepository implements ICustomerRepository{
 
  private mongoDBConnection: any = new MongoDBConnection().start();

  async findByDocument(document: string): Promise<Customer> {

    const manager = (await this.mongoDBConnection).manager;

    const customer = await manager.findOneBy(Customer, {
      document: document,
    });

    return customer;
  }

  async list(): Promise<Customer> {
    const manager = (await this.mongoDBConnection).manager;

    const customers : Customer = await manager.getRepository(Customer).find();

    return customers;
  }

  async save(customer: Customer): Promise<void> {
    const manager = (await this.mongoDBConnection).manager;

    await manager.getRepository(Customer).save(customer);
  }

  async update(customer: Customer, id: string): Promise<void> {
    const manager = (await this.mongoDBConnection).manager;

    await manager.getRepository(Customer).updateOne(
      { _id: new ObjectID(id) },
      { $set: customer },
    );
  }

  async delete(document: string): Promise<void> {
    const manager = (await this.mongoDBConnection).manager;

    await manager.getRepository(Customer).deleteOne({ document: document });
  }
}

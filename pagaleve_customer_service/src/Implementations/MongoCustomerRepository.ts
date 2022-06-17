import { Customer } from "../entities/Customer";
import { ICustomerRepository } from "../repositories/ICustomerRepository";
import { MongoDBConnection } from "../external/MongoDBConnection";

export class MongoCustomerRepository implements ICustomerRepository{

  private mongoDBConnection: any = new MongoDBConnection().start();

  async findByDocument(document: string): Promise<Customer> {

    const manager = (await this.mongoDBConnection).manager;

    const customer = await manager.findOneBy(Customer, {
      document: document,
    });

    // const customer : Customer = await manager.getRepository(CustomerMongoEntity).find({
    //   where: {
    //     document: { $eq: document },
    //   },
    // });

    console.log("findByDocument", customer);

    return customer;
  }

  async save(customer: Customer): Promise<void> {
    const manager = (await this.mongoDBConnection).manager;
    console.log("save",customer)
    await manager.getRepository(Customer).save(customer)
  }
}

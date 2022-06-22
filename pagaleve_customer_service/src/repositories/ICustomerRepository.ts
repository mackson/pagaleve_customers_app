import { Customer } from '../entities/Customer';
export interface ICustomerRepository {
  findByDocument(document: string): Promise<Customer>;
  list(): Promise<Customer>;
  save(customer: Customer): Promise<void>;
  update(customer: Customer, id:string): Promise<void>;
  delete(document: string): Promise<void>;
}
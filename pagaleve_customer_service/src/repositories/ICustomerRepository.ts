import { Customer } from '../entities/Customer';
export interface ICustomerRepository {
  findByDocument(document: string): Promise<Customer>;
  list(page:number, limit:number): Promise<Customer>;
  getAll(): Promise<number>;
  save(customer: Customer): Promise<void>;
  update(customer: Customer, id:string): Promise<void>;
  delete(document: string): Promise<void>;
}
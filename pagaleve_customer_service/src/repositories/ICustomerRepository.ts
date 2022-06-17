import { Customer } from "../entities/Customer";

export interface ICustomerRepository {
    findByDocument(document: string): Promise<Customer>;

    save(customer: Customer): Promise<void>;
}
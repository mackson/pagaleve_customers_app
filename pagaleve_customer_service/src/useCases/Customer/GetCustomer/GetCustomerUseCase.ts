import { Customer } from "../../../entities/Customer";
import { ICustomerRepository } from "../../../repositories/ICustomerRepository";

export class GetCustomerUserCase{

  constructor(
    private customerRepository: ICustomerRepository
  ){}

  async executeList (){
    try{
      const listAllCustomers = await this.customerRepository.list();
      return listAllCustomers;
    }catch(error){
      throw new Error("Customers not found "+error)
    }
  }

  async executeGetOne (document: string){
    try{
      const getCustomer = await this.customerRepository.findByDocument(document);
      return getCustomer;
    }catch(error){
      throw new Error("Customer not found "+error)
    }
  }
}
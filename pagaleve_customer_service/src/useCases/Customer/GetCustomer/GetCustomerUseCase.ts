import { ICustomerRepository } from '../../../repositories/ICustomerRepository';
export class GetCustomerUserCase{

  constructor(
    private customerRepository: ICustomerRepository
  ){}

  async executeList (page:number, limit:number){
    try{
      const listAllCustomers = await this.customerRepository.list(page, limit);
      return listAllCustomers;
    }catch(error){
      throw new Error('Customers not found '+error);
    }
  }

  async executeGetAll (){
    try{
      const listAllCustomers = await this.customerRepository.getAll();
      return listAllCustomers;
    }catch(error){
      throw new Error('Customers not found '+error);
    }
  }

  async executeGetOne (document: string){
    try{
      const getCustomer = await this.customerRepository.findByDocument(document);
      return getCustomer;
    }catch(error){
      throw new Error('Customer not found '+error);
    }
  }
}
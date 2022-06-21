import { ICustomerRepository } from "../../../repositories/ICustomerRepository";

export class DeleteCustomerUserCase{
  constructor(
    private customerRepository: ICustomerRepository
  ){}

  async execute (document: string){
    await this.customerRepository.delete(document);
  }
}
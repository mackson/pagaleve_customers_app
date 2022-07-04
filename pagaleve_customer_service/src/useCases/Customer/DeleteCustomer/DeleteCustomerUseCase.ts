import { ICustomerRepository } from '../../../repositories/ICustomerRepository';
export class DeleteCustomerUseCase{
  constructor(
    private customerRepository: ICustomerRepository
  ){}

  async execute (document: string){
    try{
      await this.customerRepository.delete(document);
      return 'done';
    }catch(error){
      return error;
    }
  }
}
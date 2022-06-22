import { validate } from 'class-validator';
import { Customer } from '../../../entities/Customer';
import { ICustomerRepository } from '../../../repositories/ICustomerRepository';
import { ICustomerRequestDTO } from '../CustomerDTO';
export class UpdateCustomerUserCase{

  constructor(
    private customerRepository: ICustomerRepository
  ){}

  async execute (data: ICustomerRequestDTO, id: string){

    const customer = new Customer(data);

    const errors = await validate(customer);
    if (errors.length > 0) {
      const errorsMessages = errors.map(err => Object.values(err.constraints).toString());
      throw new Error(`Validation failed! ${errorsMessages}`);
    }

    await this.customerRepository.update(customer, id);

  }
}
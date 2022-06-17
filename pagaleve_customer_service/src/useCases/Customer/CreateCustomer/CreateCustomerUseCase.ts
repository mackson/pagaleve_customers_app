import { validate } from "class-validator";
import { Customer } from "../../../entities/Customer";
import { ICustomerRepository } from "../../../repositories/ICustomerRepository";
import { ICreateCustomerRequestDTO } from "./CreateCustomerDTO";

export class CreateCustomerUserCase{

    constructor(
      private customerRepository: ICustomerRepository
    ){}

    async execute (data: ICreateCustomerRequestDTO){
      const customerAlreadyExists = await this.customerRepository.findByDocument(data.document);

      console.log("customerAlreadyExists",customerAlreadyExists)

      if(customerAlreadyExists) {
        throw new Error("Customer Already Exists")
      }

      const customer = new Customer(data)

      const errors = await validate(customer);
      if (errors.length > 0) {
        const errorsMessages = errors.map(err => Object.values(err.constraints).toString())
        throw new Error(`Validation failed! ${errorsMessages}`)
      }

      await this.customerRepository.save(customer);

    }
}
import { MongoCustomerRepository } from '../../../implementations/MongoCustomerRepository';
import { CreateCustomerController } from './CreateCustomerController';
import { CreateCustomerUserCase } from './CreateCustomerUseCase';

const mongoCustomerRepository = new MongoCustomerRepository();

const createCustomerUserCase = new CreateCustomerUserCase(
  mongoCustomerRepository,
);

const createCustomerController = new CreateCustomerController(
  createCustomerUserCase,
);

export { createCustomerUserCase, createCustomerController };
import { MongoCustomerRepository } from '../../../implementations/MongoCustomerRepository';
import { CreateCustomerController } from './CreateCustomerController';
import { CreateCustomerUseCase } from './CreateCustomerUseCase';

const mongoCustomerRepository = new MongoCustomerRepository();

const createCustomerUseCase = new CreateCustomerUseCase(
  mongoCustomerRepository,
);

const createCustomerController = new CreateCustomerController(
  createCustomerUseCase,
);

export { createCustomerUseCase, createCustomerController };
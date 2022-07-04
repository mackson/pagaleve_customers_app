import { MongoCustomerRepository } from '../../../implementations/MongoCustomerRepository';
import { GetCustomerController } from './GetCustomerController';
import { GetCustomerUseCase } from './GetCustomerUseCase';

const mongoCustomerRepository = new MongoCustomerRepository();

const getCustomerUseCase = new GetCustomerUseCase(
  mongoCustomerRepository,
);

const getCustomerController = new GetCustomerController(
  getCustomerUseCase,
);

export { getCustomerUseCase, getCustomerController };
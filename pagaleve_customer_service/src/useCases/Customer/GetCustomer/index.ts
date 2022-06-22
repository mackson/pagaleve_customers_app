import { MongoCustomerRepository } from '../../../implementations/MongoCustomerRepository';
import { GetCustomerController } from './GetCustomerController';
import { GetCustomerUserCase } from './GetCustomerUseCase';

const mongoCustomerRepository = new MongoCustomerRepository();

const getCustomerUserCase = new GetCustomerUserCase(
  mongoCustomerRepository,
);

const getCustomerController = new GetCustomerController(
  getCustomerUserCase,
);

export { getCustomerUserCase, getCustomerController };
import { MongoCustomerRepository } from '../../../implementations/MongoCustomerRepository';
import { UpdateCustomerController } from './UpdateCustomerController';
import { UpdateCustomerUserCase } from './UpdateCustomerUseCase';

const mongoCustomerRepository = new MongoCustomerRepository();

const updateCustomerUserCase = new UpdateCustomerUserCase(
  mongoCustomerRepository,
);

const updateCustomerController = new UpdateCustomerController(
  updateCustomerUserCase,
);

export { updateCustomerUserCase, updateCustomerController };
import { MongoCustomerRepository } from '../../../implementations/MongoCustomerRepository';
import { UpdateCustomerController } from './UpdateCustomerController';
import { UpdateCustomerUseCase } from './UpdateCustomerUseCase';

const mongoCustomerRepository = new MongoCustomerRepository();

const updateCustomerUseCase = new UpdateCustomerUseCase(
  mongoCustomerRepository,
);

const updateCustomerController = new UpdateCustomerController(
  updateCustomerUseCase,
);

export { updateCustomerUseCase, updateCustomerController };
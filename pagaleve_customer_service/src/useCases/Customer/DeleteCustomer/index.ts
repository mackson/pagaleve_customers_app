import { MongoCustomerRepository } from '../../../implementations/MongoCustomerRepository';
import { DeleteCustomerController } from './DeleteCustomerController';
import { DeleteCustomerUseCase } from './DeleteCustomerUseCase';

const mongoCustomerRepository = new MongoCustomerRepository();

const deleteCustomerUseCase = new DeleteCustomerUseCase(
  mongoCustomerRepository,
);

const deleteCustomerController = new DeleteCustomerController(
  deleteCustomerUseCase,
);

export { deleteCustomerUseCase, deleteCustomerController };
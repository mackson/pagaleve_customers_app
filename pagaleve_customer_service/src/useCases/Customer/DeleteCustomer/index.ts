import { MongoCustomerRepository } from '../../../implementations/MongoCustomerRepository';
import { DeleteCustomerController } from './DeleteCustomerController';
import { DeleteCustomerUserCase } from './DeleteCustomerUseCase';

const mongoCustomerRepository = new MongoCustomerRepository();

const deleteCustomerUserCase = new DeleteCustomerUserCase(
  mongoCustomerRepository,
);

const deleteCustomerController = new DeleteCustomerController(
  deleteCustomerUserCase,
);

export { deleteCustomerUserCase, deleteCustomerController };
import { UpdateCustomerUseCase } from './UpdateCustomerUseCase';
import { MongoCustomerRepository } from '../../../implementations/MongoCustomerRepository';

describe('Update Customer use case', () => {
  it('should be able to update a customer by id', async () =>{

    const mongoCustomerRepository = new MongoCustomerRepository();

    // System Under Test Convention
    const sut = new UpdateCustomerUseCase(
      mongoCustomerRepository
    );

    const response = await sut.execute({
      name: 'fake-customer-name2',
      document: '46546465',
      category: 'Pessoa Jurídica',
      wallet: 1,
    },'62b552f46c67e3097255a5db');

    expect(response).toBe('done');

  });
});
import { CreateCustomerUseCase } from './CreateCustomerUseCase';
import { MongoCustomerRepository } from '../../../implementations/MongoCustomerRepository';

describe('Create Customer use case', () => {
  it('should be able to create a new customer', async () =>{

    const mongoCustomerRepository = new MongoCustomerRepository();

    // System Under Test Convention
    const sut = new CreateCustomerUseCase(
      mongoCustomerRepository
    );

    const response = await sut.execute({
      name: 'fake-customer-name',
      document: '89789789788',
      category: 'Pessoa Jurídica',
      wallet: 1000,
    });

    expect(response).toBe('done');

  });
});
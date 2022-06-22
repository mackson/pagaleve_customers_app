import { CreateCustomerUserCase } from './CreateCustomerUseCase';
import { MongoCustomerRepository } from '../../../implementations/MongoCustomerRepository';

describe('Create Customer use case', () => {
  it('should be able to create a new customer', async () =>{

    const mongoCustomerRepository = new MongoCustomerRepository();

    // System Under Test Convention
    const sut = new CreateCustomerUserCase(
      mongoCustomerRepository
    );

    const response = await sut.execute({
      name: 'fake-customer-name',
      document: 'fake-document1',
      category: 'fake-category',
      wallet: 1,
    });

    expect(response).toBe('done');

  });
});
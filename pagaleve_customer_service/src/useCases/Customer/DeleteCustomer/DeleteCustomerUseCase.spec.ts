import { DeleteCustomerUseCase } from './DeleteCustomerUseCase';
import { MongoCustomerRepository } from '../../../implementations/MongoCustomerRepository';

describe('Delete Customer use case', () => {
  it('should be able to delete a customer', async () =>{

    const mongoCustomerRepository = new MongoCustomerRepository();

    // System Under Test Convention
    const sut = new DeleteCustomerUseCase(
      mongoCustomerRepository
    );

    const response = await sut.execute('4535234');

    expect(response).toBe('done');

  });
});
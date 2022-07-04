import { GetCustomerUseCase } from './GetCustomerUseCase';
import { MongoCustomerRepository } from '../../../implementations/MongoCustomerRepository';

describe('List Customers use case', () => {
  it('should be able to list the customers with pagination', async () =>{

    const mongoCustomerRepository = new MongoCustomerRepository();

    // System Under Test Convention
    const sut = new GetCustomerUseCase(
      mongoCustomerRepository
    );

    const response = await sut.executeList(1,5);

    expect(response).toMatchObject(response);

  });
});

describe('Count All Customers use case', () => {
  it('should be able to count all customers', async () =>{

    const mongoCustomerRepository = new MongoCustomerRepository();

    // System Under Test Convention
    const sut = new GetCustomerUseCase(
      mongoCustomerRepository
    );

    const response = await sut.executeCountAll();

    expect(response).toBeGreaterThanOrEqual(0);

  });
});

describe('Get One Customer use case', () => {
  it('should be able to get one customer by document', async () =>{

    const mongoCustomerRepository = new MongoCustomerRepository();

    // System Under Test Convention
    const sut = new GetCustomerUseCase(
      mongoCustomerRepository
    );

    const response = await sut.executeGetOne('231423');

    expect(response).toMatchObject({document:'231423'});

  });
});
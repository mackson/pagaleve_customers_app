import { Request, Response } from 'express';
import { GetCustomerUseCase } from './GetCustomerUseCase';
export class GetCustomerController{
  constructor(
      private getCustomerUserCase: GetCustomerUseCase
  ){}

  async list(request: Request, response: Response): Promise<Response>{
    try{
      const { page, limit } = request.params;
      const listCustomers = await this.getCustomerUserCase.executeList(Number(page), Number(limit));
      return response.json(listCustomers);
    }catch(error){
      return response.json({
        error: error.message || 'Unexpected error',
      });
    }
  }

  async countAll(request: Request, response: Response): Promise<Response>{
    try{
      const countCustomers = await this.getCustomerUserCase.executeCountAll();
      return response.json(countCustomers);
    }catch(error){
      return response.json({
        error: error.message || 'Unexpected error',
      });
    }
  }

  async geoOne(request: Request, response: Response): Promise<Response>{
    try{
      const { document } = request.params;
      const getOneCustomer = await this.getCustomerUserCase.executeGetOne(document);
      return response.json(getOneCustomer);
    }catch(error){
      return response.json({
        error: error.message || 'Unexpected error',
      });
    }
  }
}


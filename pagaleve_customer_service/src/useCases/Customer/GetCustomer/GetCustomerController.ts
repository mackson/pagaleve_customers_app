import { Request, Response } from "express";
import { GetCustomerUserCase } from "./GetCustomerUseCase";

export class GetCustomerController{
  constructor(
      private getCustomerUserCase: GetCustomerUserCase
  ){}

  async list(request: Request, response: Response): Promise<Response>{
    try{
      const listCustomers = await this.getCustomerUserCase.executeList();
      return response.json(listCustomers);
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


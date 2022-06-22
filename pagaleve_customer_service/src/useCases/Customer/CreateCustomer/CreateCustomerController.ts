import { Request, Response } from 'express';
import { CreateCustomerUserCase } from './CreateCustomerUseCase';
export class CreateCustomerController{
  constructor(
    private createCustomerUserCase: CreateCustomerUserCase
  ){}

  async handle(request: Request, response: Response): Promise<Response>{
    const { 
      name, 
      document, 
      category, 
      wallet 
    } = request.body.data;

    try{
      await this.createCustomerUserCase.execute({
        name,
        document,
        category,
        wallet,
      });
      return response.json({message: 'created'});
    }catch(error){
      return response.json({
        error: error.message || 'Unexpected error',
      });
    }
  }
}


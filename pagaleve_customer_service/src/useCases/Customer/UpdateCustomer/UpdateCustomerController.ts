import { Request, Response } from "express";
import { UpdateCustomerUserCase } from "./UpdateCustomerUseCase";

export class UpdateCustomerController{
  constructor(
    private updateCustomerUserCase: UpdateCustomerUserCase
  ){}

  async handle(request: Request, response: Response): Promise<Response>{
    const {
      id,
      name,
      document,
      category,
      wallet
    } = request.body.data;

    try{
      await this.updateCustomerUserCase.execute({
        name,
        document,
        category,
        wallet,
      }, id);
      return response.json({message: 'updated'});
    }catch(error){
      return response.json({
        error: error.message || 'Unexpected error',
      });
    }
  }
}


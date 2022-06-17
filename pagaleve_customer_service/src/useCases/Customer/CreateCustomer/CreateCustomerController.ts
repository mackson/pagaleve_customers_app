import { Request, Response } from "express";
import { CreateCustomerUserCase } from "./CreateCustomerUseCase";

export class CreateCustomerController{
    constructor(
        private createCustomerUserCase: CreateCustomerUserCase
    ){}

    async handle(request: Request, response: Response): Promise<Response>{

      const { 
        name, 
        document, 
        type, 
        wallet 
      } = request.body;

      try{
        await this.createCustomerUserCase.execute({
          name,
          document,
          type,
          wallet,
        });
        return response.status(201).json({"status":201});
      }catch(error){
        return response.status(400).json({
          message: error.message || 'Unexpected error',
        });
      }

    }
}


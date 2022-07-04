import { Request, Response } from 'express';
import { DeleteCustomerUseCase } from './DeleteCustomerUseCase';
export class DeleteCustomerController{
  constructor(
    private deleteCustomerUserCase: DeleteCustomerUseCase
  ){}

  async handle(request: Request, response: Response): Promise<Response>{
    const {
      document,
    } = request.body;

    try{
      await this.deleteCustomerUserCase.execute(document);
      return response.json({message: 'Deleted'});
    }catch(error){
      return response.json({
        error: error.message || 'Unexpected error',
      });
    }
  }
}


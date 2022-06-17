import { Router } from "express";
import { createCustomerController } from "./useCases/Customer/CreateCustomer";

const router = Router();

router.post('/customer/create', (request, response) => {
  return createCustomerController.handle(request, response)
});

export { router }
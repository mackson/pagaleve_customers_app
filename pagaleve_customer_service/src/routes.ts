import { Router } from "express";
import { createCustomerController } from "./useCases/Customer/CreateCustomer";
import { getCustomerController } from "./useCases/Customer/GetCustomer";
import { updateCustomerController } from "./useCases/Customer/UpdateCustomer";
import { deleteCustomerController } from "./useCases/Customer/DeleteCustomer";

const router = Router();

router.post('/customer/create', (request, response) => {
  return createCustomerController.handle(request, response);
});

router.get('/customer/list', (request, response) => {
  return getCustomerController.list(request, response);
});

router.get('/customer/getone/:document', (request, response) => {
  return getCustomerController.geoOne(request, response);
});

router.put('/customer/update', (request, response) => {
  return updateCustomerController.handle(request, response);
});

router.delete('/customer/delete', (request, response) => {
  return deleteCustomerController.handle(request, response);
});

export { router }
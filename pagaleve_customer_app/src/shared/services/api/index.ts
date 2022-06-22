import axios from 'axios';

export interface Customer {
  id?: string,
  name: string;
  document: string;
  category: string;
  wallet: number;
}

const apiInstance = axios.create({
  baseURL: 'http://localhost:3333',
});

export const CustomersList = async () => {
  try{
    const customersList = await apiInstance.get('/customer/list');
    return customersList.data;
  }catch(error){
    return {error: error};
  }
};

export const CustomersGetOne = async (document:string) => {
  try{
    const customersGetOne = await apiInstance.get(`/customer/getone/${document}`);
    return customersGetOne.data;
  }catch(error){
    return {error: error};
  }
};

export const CustomerSave = async (data: Customer) => {
  try{
    const customerSave = await apiInstance.post('/customer/create',{data});
    return customerSave.data;
  }catch(error){
    return {error: error};
  }
};

export const CustomerEdit = async (data: Customer) => {
  try{
    const customerEdit = await apiInstance.put('/customer/update',{data});
    return customerEdit.data;
  }catch(error){
    return {error: error};
  }
};

export const CustomerDelete = async (document: string) => {
  try{
    const customerDelete = await apiInstance.delete('/customer/delete',{data:{document:document}});
    return customerDelete.data;
  }catch(error){
    return {error: error};
  }
};



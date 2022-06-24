import axios from 'axios';

export interface ICustomer {
  id?: string,
  name: string;
  document: string;
  category: string;
  wallet: number;
}

const apiInstance = axios.create({
  baseURL: 'http://107.180.106.82:3333',
  //baseURL: 'http://localhost:3333',
});

export const CustomersList = (page:number, limit:number) => {
  const customersList = apiInstance.get(`/customer/list/${page}/${limit}`);
  return customersList;
};

export const CustomersGetAll = async() => {
  const customersGetAll = await apiInstance.get('/customer/getall');
  return customersGetAll.data;
};

export const CustomersGetOne = async (document:string) => {
  try{
    const customersGetOne = await apiInstance.get(`/customer/getone/${document}`);
    return customersGetOne.data;
  }catch(error){
    return {error: error};
  }
};

export const CustomerSave = async (data: ICustomer) => {
  try{
    const customerSave = await apiInstance.post('/customer/create',{data});
    return customerSave.data;
  }catch(error){
    return {error: error};
  }
};

export const CustomerEdit = async (data: ICustomer) => {
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



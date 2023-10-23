import { BASE_URL } from '@/env';
import axios, { AxiosResponse } from 'axios';
import { MutationFunction } from 'react-query';
const brToken = localStorage.getItem('token');

// *****************Post Apis********************

export const SignInPost = async (values: unknown): Promise<MutationFunction<unknown>> => {
  const response: AxiosResponse = await axios.post(`${BASE_URL}/api/create/login`, values);
  console.log(response.data);
  return response.data;
};

export const CompanyPost = async (values: unknown): Promise<unknown> => {
  console.log('post');
  const response: AxiosResponse = await axios.post(`${BASE_URL}/api/create/company`, values, { headers: { Authorization: brToken } });
  return response.data;
};

export const BranchPost = async (values: unknown): Promise<unknown> => {
  const response: AxiosResponse = await axios.post(`${BASE_URL}/api/create/branch`, values, { headers: { Authorization: brToken } });
  return response.data;
};

export const DepartmentPost = async (values: unknown): Promise<unknown> => {
  const response: AxiosResponse = await axios.post(`${BASE_URL}/api/create/department`, values, { headers: { Authorization: brToken } });
  return response.data;
};
export const DesignationPost = async (values: unknown): Promise<unknown> => {
  console.log('post');
  const response: AxiosResponse = await axios.post(`${BASE_URL}/api/create/designation`, values, { headers: { Authorization: brToken } });
  return response.data;
};

// *******************Get apis**********************

export const CompanyGetApi = async () => {
  return await axios.get(`${BASE_URL}/api/retrieve/company`, {
    headers: { Authorization: brToken },
  });
};

export const BranchGetApi = async () => {
  return await axios.get(`${BASE_URL}/api/retrieve/branch`, {
    headers: { Authorization: brToken },
  });
};
export const DepartmentGetApi = async () => {
  return await axios.get(`${BASE_URL}/api/retrieve/department`, {
    headers: { Authorization: brToken },
  });
};
export const DesignationGetApi = async () => {
  return await axios.get(`${BASE_URL}/api/retrieve/designation`, {
    headers: { Authorization: brToken },
  });
};

// ********************Put Api*************************

export const CompanyPut = async (values: unknown): Promise<unknown> => {
  console.log('put');

  const response: AxiosResponse = await axios.put(`${BASE_URL}/api/update/company`, values, { headers: { Authorization: brToken } });
  console.log(response.data);
  return response.data;
};

export const BranchPut = async (values: unknown): Promise<unknown> => {
  const response: AxiosResponse = await axios.put(`${BASE_URL}/api/update/branch`, values, { headers: { Authorization: brToken } });
  return response.data;
};

export const DepartmentPut = async (values: unknown): Promise<unknown> => {
  const response: AxiosResponse = await axios.put(`${BASE_URL}/api/update/department`, values, { headers: { Authorization: brToken } });
  return response.data;
};

export const DesignationPut = async (values: unknown): Promise<unknown> => {
  const response: AxiosResponse = await axios.put(`${BASE_URL}/api/update/designation`, values, { headers: { Authorization: brToken } });
  return response.data;
};

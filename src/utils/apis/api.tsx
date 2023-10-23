import { BASE_URL } from '@/env';
import axios, { AxiosResponse } from 'axios';
import { MutationFunction } from 'react-query';
const brToken = localStorage.getItem('token');

// Post Apis
export const SignInPost = async (
  values: unknown,
): Promise<MutationFunction<unknown>> => {
  const response: AxiosResponse = await axios.post(
    `${BASE_URL}/api/create/login`,
    values,
  );
  console.log(response.data);
  return response.data;
};

export const CompanyPost = async (values: unknown): Promise<unknown> => {
  // try {
  const response: AxiosResponse = await axios.post(
    `${BASE_URL}/api/create/company`,
    values,
    { headers: { Authorization: brToken } },
  );
  console.log(response.data);
  return response.data;
  // } catch (error) {
  //   console.error(error);
  // }
};

// Get apis

export const CompanyGetApi = async () => {
  return await axios.get(`${BASE_URL}/api/retrieve/company`, {
    headers: { Authorization: brToken },
  });
};

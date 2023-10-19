import axios, { AxiosResponse } from 'axios';
type GenericData<T = string | string[]> = T;
export const fakeApi = async () => {
  return await axios.get('https://jsonplaceholder.typicode.com/posts');
};
export const PostData = async (data: GenericData): Promise<GenericData> => {
  const response: AxiosResponse = await axios.post(
    'https://technosters-billing-system-backend.technosters.co.in/api/create/type',
    data,
  );
  return response.data;
};

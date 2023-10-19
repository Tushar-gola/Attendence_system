import { MutationFunction, useMutation } from 'react-query';

export const PostApi = (fn: MutationFunction<unknown, void>) => {
  const mutation = useMutation(fn, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { mutation };
};

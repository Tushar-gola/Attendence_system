/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { MutationFunction, useMutation } from 'react-query';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/hooks';
import { setLoading } from '@/redux';
export const usePostApi = (fn: MutationFunction<unknown>) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const mutation = useMutation(fn, {
    onSuccess: (data) => {
      console.log(data);
      if (data?.data?.token) {
        localStorage.setItem('token', data?.data?.token);
        navigate('/dashboard');
      }
    },
    onError: (error) => {
      console.log(error);
      enqueueSnackbar(error.response.data.message, {
        variant: error.response.data.type,
      });
    },
  });
  if (mutation?.isLoading) {
    dispatch(setLoading(true));
  } else {
    dispatch(setLoading(false));
  }
  return { mutation };
};

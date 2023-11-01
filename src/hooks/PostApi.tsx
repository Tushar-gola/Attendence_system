/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { MutationFunction, useMutation, useQueryClient  } from 'react-query';
import { enqueueSnackbar } from 'notistack';
import { useAppDispatch } from '@/hooks';
import { setLoading } from '@/redux';
import React from 'react';
export const usePostApi = (fn: MutationFunction<unknown>, refetchkey) => {
  const [postData, setPostData] = React.useState(null);
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const mutation = useMutation(fn, {
    onSuccess: (data) => {
      setPostData(data);
      console.log(data);
      if (data?.data?.token) {
        localStorage.setItem('token', data?.data?.token);
      }
      if(refetchkey){
        queryClient.invalidateQueries(refetchkey);
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

  return { mutation, postData };
};

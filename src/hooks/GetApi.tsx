import { useQuery } from 'react-query';
// import React from 'react';
// import { setLoading } from '@/redux';
// import { useAppDispatch } from '@/hooks';

export const GetAPi = (key: string, fn: () => void) => {
  const { data, isLoading } = useQuery(key, fn, {retry:1});
  return { data, isLoading };
};

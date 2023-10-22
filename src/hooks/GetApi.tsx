import { useQuery } from 'react-query';
// import { fakeApi } from '@/utils';
import { setLoading } from '@/redux';
import { useAppDispatch } from '@/hooks';

export const GetAPi = (key: string, fn: () => void) => {
  const dispatch = useAppDispatch();
  const { data, isError, isLoading, isSuccess } = useQuery(key, fn);
  console.log(isSuccess, isLoading, isError);
  if (isLoading) {
    dispatch(setLoading(true));
  } else {
    dispatch(setLoading(false));
  }
  return { data, isLoading };
};

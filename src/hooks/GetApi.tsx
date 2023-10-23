import { useQuery } from 'react-query';
import { setLoading } from '@/redux';
import { useAppDispatch } from '@/hooks';

export const GetAPi = (key: string, fn: () => void) => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useQuery(key, fn);
  if (isLoading) {
    dispatch(setLoading(true));
  } else {
    dispatch(setLoading(false));
  }
  return { data, isLoading };
};

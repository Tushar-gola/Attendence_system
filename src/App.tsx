import './App.css';
import { MiniDrawer } from '@/components';
import { useAppSelector } from '@/hooks';
import { Loader } from '@/constants';
import { Routers } from './routes';

export default function App() {
  const count = useAppSelector((state) => state.loader.isLoading);
  const token = localStorage.getItem('token');
  return (
    <>
      {count ? <Loader /> : null}
      {token ? <MiniDrawer /> : <Routers />}
    </>
  );
}

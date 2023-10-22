import React from 'react';
import './App.css';
import { MiniDrawer } from '@/components';
import { useAppSelector } from '@/hooks';
import { Loader, IsOnline } from '@/constants';
import { Routers } from '@/routes';

export default function App() {
  const count = useAppSelector((state) => state.loader.isLoading);
  const token = localStorage.getItem('token');
  const [isOnline, setIsOnline] = React.useState(navigator.onLine);

  React.useEffect(() => {
    // Add event listeners for online and offline events
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Clean up event listeners when the component unmounts
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleOnline = () => {
    setIsOnline(true);
  };

  const handleOffline = () => {
    setIsOnline(false);
    setTimeout(() => {
      setIsOnline(true);
    }, 10000);
  };
  return (
    <>
      {!isOnline ? <IsOnline /> : null}
      {count ? <Loader /> : null}
      {token ? <MiniDrawer /> : <Routers />}
    </>
  );
}

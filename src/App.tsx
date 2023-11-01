/* eslint-disable no-extra-parens */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import './App.css';
import { useIsFetching } from 'react-query';
import { useAppSelector } from '@/hooks';
import { Loader, IsOnline } from '@/constants';
import { Routers } from '@/routes';
import { SnackbarProvider } from 'notistack';
import { Button } from '@mui/material';
export default function App() {
  const count = useAppSelector((state) => state.loader.isLoading);
  const [isOnline, setIsOnline] = React.useState(navigator.onLine);
  const isFetching = useIsFetching();
  const snackbarProvider = React.useRef();
  React.useEffect(() => {
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
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
      { count ? <Loader /> : null}
      { isFetching ? <Loader /> : null}
      <SnackbarProvider
        ref={snackbarProvider}
        anchorOrgin={{ horizontal: 'center', vertical: 'bottom' }}
        maxSnack={5}
        style={{
          fontSize: '.8rem',
          fontWeight: 400,
        }}
        action={(snackbarId) => (
          <Button size="small" color="inherit" onClick={() => snackbarProvider?.current?.closeSnackbar?.(snackbarId)}>
            Dismiss
          </Button>
        )}
      >
        <Routers />
      </SnackbarProvider>
    </>
  );
}

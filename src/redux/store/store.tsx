import { configureStore } from '@reduxjs/toolkit';
import LoaderReducer from '../slices/loader';

export const Store = configureStore({
  reducer: {
    loader: LoaderReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

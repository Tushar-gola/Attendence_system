import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/redux';

interface LoaderState {
  isLoading: boolean;
}

const initialState: LoaderState = {
  isLoading: false,
};

export const loadingSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;

// Selectors can use the imported `RootState` type
export const selectIsLoading = (state: RootState) => state.loader.isLoading;

export default loadingSlice.reducer;

import React from 'react';
import { Grid } from '@mui/material';
interface ColumnProps {
  children: string | React.ReactNode;
  xs?: number;
  md?: number;
  xl?: number;
  sm?: number;
}

export const Column = ({ children, ...props }: ColumnProps) => {
  return (
    <Grid item {...props}>
      {children}
    </Grid>
  );
};

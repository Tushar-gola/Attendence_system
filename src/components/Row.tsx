import React from 'react';
import { Grid } from '@mui/material';
interface RowProps {
  children: string | React.ReactNode;
  spacing?: number;
  rowSpacing?: number;
  columnSpacing?: number;
}

export const Row = ({ children, ...props }: RowProps) => {
  return (
    <Grid container {...props}>
      {children}
    </Grid>
  );
};

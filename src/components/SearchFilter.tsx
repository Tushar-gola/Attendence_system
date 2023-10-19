// import * as React from 'react';
import { Paper, InputBase, Divider, IconButton } from '@mui/material';
import { ChangeEvent } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
interface SearchFilterProps {
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  //   onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
export function SearchFilter({ placeholder, ...props }: SearchFilterProps) {
  return (
    <Paper
      component="form"
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginLeft: '20px',
      }}
    >
      <IconButton sx={{ p: '10px' }}>
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        inputProps={{ 'aria-label': `${placeholder}` }}
        {...props}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Paper>
  );
}

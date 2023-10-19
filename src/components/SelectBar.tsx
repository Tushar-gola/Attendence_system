/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-extra-parens */
// @ts-nocheck
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent, SelectProps } from '@mui/material/Select';
import { Column } from '.';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

type Value = string[] | null | string | SelectProps<string[]>;
type OptionItem = {
  id: string | number;
  label: string;
};
interface SelectBarProps {
  placeholder?: string;
  name?: string;
  value?: Value;
  onChange?: (e: SelectChangeEvent<string[]>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  option?: OptionItem[];
  id?: string;
  required?: boolean;
  label: string;
  half?: boolean;
  error?: string | undefined;
}
const sty = {
  display: 'flex',
  alignItems: 'center',
  height: '100%',
};
export const SelectBar = React.memo(
  ({
    placeholder,
    name,
    value,
    option,
    id,
    required,
    label,
    half,
    error,
    ...props
  }: SelectBarProps) => {
    console.log(error, 'kkkkkkkkkkkkkk');

    return (
      <>
        {half ? (
          <>
            <Column xs={4}>
              <div style={sty}>
                <label
                  htmlFor={id}
                  className={`${required ? 'estric' : 'non-estric'}`}
                >
                  {label}
                </label>
              </div>
            </Column>
            <Column xs={8}>
              <FormControl fullWidth>
                <Select
                  name={name}
                  displayEmpty
                  value={value}
                  {...props}
                  input={<OutlinedInput />}
                  MenuProps={MenuProps}
                  sx={{
                    '& .MuiSelect-select': {
                      padding: '8px',
                    },
                  }}
                >
                  <MenuItem disabled value="">
                    <em>{placeholder}</em>
                  </MenuItem>
                  {option?.map(({ id, label }) => (
                    <MenuItem key={id} value={label}>
                      {label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Column>
          </>
        ) : (
          <Column xs={6}>
            <label
              htmlFor={id}
              className={`${required ? 'estric' : 'non-estric'}`}
            >
              {label}
            </label>
            <FormControl fullWidth>
              <Select
                name={name}
                displayEmpty
                error={error ? true : false}
                value={value}
                {...props}
                input={<OutlinedInput />}
                MenuProps={MenuProps}
                sx={{
                  '& .MuiSelect-select': {
                    padding: '8px',
                  },
                }}
              >
                <MenuItem disabled value="">
                  <em>{placeholder}</em>
                </MenuItem>
                {option?.map(({ id, label }) => (
                  <MenuItem key={id} value={label}>
                    {label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <div className="helperText">{error}</div>
          </Column>
        )}
      </>
    );
  },
);

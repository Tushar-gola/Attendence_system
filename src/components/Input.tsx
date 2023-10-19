/* eslint-disable no-extra-parens */
import { ChangeEvent } from 'react';
import { Column } from '.';
import { TextFieldVariants } from '@mui/material';
interface InputProps {
  half?: boolean;
  id?: string;
  label: string;
  variant?: TextFieldVariants;
  name: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
  error?: string | undefined;
}
const sty = {
  display: 'flex',
  alignItems: 'center',
  height: '100%',
};

export const Input = ({
  id,
  label,
  name,
  value,
  required,
  placeholder,
  half,
  error,
  ...props
}: InputProps) => {
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
            <input
              type="text"
              id={id}
              name={name}
              value={value}
              className="InputFeild"
              required={required}
              placeholder={placeholder}
              style={{ borderColor: error ? 'red' : '' }}
              {...props}
            />
            <div className="helperText">{error}</div>
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
          <input
            type="text"
            id={id}
            name={name}
            value={value}
            className="InputFeild"
            required={required}
            placeholder={placeholder}
            {...props}
            style={{ marginTop: '8px', borderColor: error ? 'red' : '' }}
          />
          <div className="helperText">{error}</div>
        </Column>
      )}
    </>
  );
};

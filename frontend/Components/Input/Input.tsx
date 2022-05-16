import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Grid, InputAdornment, IconButton } from '@mui/material';
import { ChangeEventHandler, MouseEventHandler } from 'react';
import { FormInput } from './styled'

type T = any;

interface InputProps {
  value: string,
  half?: boolean;
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  name: string;
  label: string;
  type?: string;
  handleShowPassword?: MouseEventHandler<T> | undefined;
}

const Input = ({
  value,
  half,
  handleChange,
  name,
  label,
  type,
  handleShowPassword,
}: InputProps) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <FormInput
      value={value}
        name={name}
        label={label}
        onChange={handleChange}
        variant='standard'
        autoFocus
        type={type}
        InputProps={
          name === 'password' ? {
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={handleShowPassword}>
                  {type === 'password' ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          } : null
        }
      />
    </Grid>
  );
};

export default Input;

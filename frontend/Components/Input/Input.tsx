import { Visibility, VisibilityOff } from '@mui/icons-material';
import { TextField, Grid, InputAdornment, IconButton } from '@mui/material';
import { ChangeEventHandler, MouseEventHandler } from 'react';

type T = any;

interface InputProps {
  half?: boolean;
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  name: string;
  label: string;
  className: string;
  type?: string;
  handleShowPassword?: MouseEventHandler<T> | undefined;
}

const Input = ({
  half,
  handleChange,
  name,
  label,
  className,
  type,
  handleShowPassword,
}: InputProps) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        className={className}
        name={name}
        label={label}
        onChange={handleChange}
        variant='outlined'
        autoFocus
        type={type}
        InputProps={
          name === 'password' && {
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={handleShowPassword}>
                  {' '}
                  {type === 'password' ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }
        }
      />
    </Grid>
  );
};

export default Input;

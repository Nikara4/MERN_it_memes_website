import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Grid, InputAdornment, IconButton } from '@mui/material';
import { InputProps } from '../../resources/interfaces';
import { FormInput } from './styled';

const Input = ({
  value,
  half,
  handleChange,
  name,
  label,
  type,
  handleShowPassword,
  required
}: InputProps) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <FormInput
        value={value}
        name={name}
        label={label}
        onChange={handleChange}
        variant={'standard'}
        autoFocus
        required={required}
        type={type}
        InputProps={
          name === 'password'
            ? {
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton onClick={handleShowPassword}>
                      {type === 'password' ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
};

export default Input;

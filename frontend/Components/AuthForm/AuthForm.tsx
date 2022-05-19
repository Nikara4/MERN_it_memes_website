import { Grid } from '@mui/material';

import Input from './Input/Input';
import { FormTitle, AuthButton, SwitchButton } from './styled';
import { Control } from '../../styles/globalComponents';
import { AuthFormProps } from '../../resources/interfaces';

const AuthForm = ({
  isSignUp,
  userData,
  setUserData,
  handleShowPassword,
  showPassword,
  handleSubmit,
  switchMode,
}: AuthFormProps) => {
  return (
    <>
      <FormTitle variant='h5'>{isSignUp ? `Sign Up` : `Sign In`}</FormTitle>
      <Control>
        <Grid container spacing={2}>
          {isSignUp && (
            <>
              <Input
                value={userData.firstName}
                half
                handleChange={(e: any) =>
                  setUserData({ ...userData, firstName: e.target.value })
                }
                name='firstName'
                label='First Name'
              />
              <Input
                value={userData.lastName}
                half
                handleChange={(e: any) =>
                  setUserData({ ...userData, lastName: e.target.value })
                }
                name='secondName'
                label='Second Name'
              />
              <Input
                value={userData.email}
                handleChange={(e: any) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                name='email'
                label='Email'
                type='email'
              />
            </>
          )}
          <Input
            value={userData.userName}
            handleChange={(e: any) =>
              setUserData({ ...userData, userName: e.target.value })
            }
            name='userName'
            label='User Name'
          />
          <Input
            value={userData.password}
            handleChange={(e: any) =>
              setUserData({ ...userData, password: e.target.value })
            }
            name='password'
            label='Password'
            type={showPassword ? 'text' : 'password'}
            handleShowPassword={handleShowPassword}
          />
          {isSignUp && (
            <>
              <Input
                value={userData.confirmPassword}
                handleChange={(e: any) =>
                  setUserData({
                    ...userData,
                    confirmPassword: e.target.value,
                  })
                }
                name='confirmPassword'
                label='Repeat Password'
                type={showPassword ? 'text' : 'password'}
                handleShowPassword={handleShowPassword}
              />
            </>
          )}
          <Grid item xs={12}>
            <AuthButton fullWidth variant='contained' onClick={handleSubmit}>
              {isSignUp ? `Sign Up` : `Sign In`}
            </AuthButton>
          </Grid>
        </Grid>
        <Grid container justifyContent='flex-end'>
          <Grid item>
            <SwitchButton onClick={switchMode}>
              {isSignUp
                ? `Already have an account? Sign In`
                : `Don't have an account? Sign Up`}
            </SwitchButton>
          </Grid>
        </Grid>
      </Control>
    </>
  );
};

export default AuthForm;

import { useState } from 'react';
import { Container, Grid } from '@mui/material';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { LockOutlined } from '@mui/icons-material';

import * as api from './api';
import { Input } from '../components';
import { User } from '../resources/interfaces';
import {
  AuthPaper,
  AuthAvatar,
  FormTitle,
  AuthButton,
  SwitchButton,
} from '../styles/authStyled';
import { Control } from '../styles/globalComponents';
import { useAuthState } from '../resources/context/auth';

const Auth: NextPage = () => {
  const [userData, setUserData] = useState<User>({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { signInUser, signUpUser } = useAuthState();

  const handleSubmit = async () => {
    if (isSignUp) {
      signUpUser(userData);
    } else {
      signInUser(userData);
    }
    // router.push('/');
  };

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const switchMode = () => setIsSignUp((prevIsSignUp) => !prevIsSignUp);

  return (
    <Container component='main' maxWidth='sm'>
      <AuthPaper elevation={3}>
        <AuthAvatar>
          <LockOutlined />
        </AuthAvatar>
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
                  value={userData.userName}
                  handleChange={(e: any) =>
                    setUserData({ ...userData, userName: e.target.value })
                  }
                  name='userName'
                  label='User Name'
                />
              </>
            )}

            <Input
              value={userData.email}
              handleChange={(e: any) =>
                setUserData({ ...userData, email: e.target.value })
              }
              name='email'
              label='Email'
              type='email'
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
      </AuthPaper>
    </Container>
  );
};

export default Auth;

import { useState } from 'react';
import { Container } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { AuthPaper, AuthAvatar } from '../styles/authStyled';
import { User } from '../resources/interfaces';
import { useAuthState } from '../resources/context/auth';
import { AuthForm, SignUpDialog } from '../components';

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
  const [open, setOpen] = useState(false);
  const { signIn, signUp } = useAuthState();
  const router = useRouter();

  const handleSubmit = async () => {
    if (isSignUp) {
      signUp(userData);
      setOpen(true);
      return;
    } else {
      signIn(userData);
    }
  };

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const switchMode = () => setIsSignUp((prevIsSignUp) => !prevIsSignUp);

  const closeDialog = () => {
    setOpen((prevOpen) => !prevOpen);
    router.push('/');
  };

  return (
    <Container component='main' maxWidth='sm'>
      <AuthPaper elevation={3}>
        <AuthAvatar>
          <LockOutlined />
        </AuthAvatar>
        <AuthForm
          isSignUp={isSignUp}
          userData={userData}
          setUserData={setUserData}
          handleShowPassword={handleShowPassword}
          showPassword={showPassword}
          handleSubmit={handleSubmit}
          switchMode={switchMode}
        />
        {open && <SignUpDialog closeDialog={closeDialog} open={open} />}
      </AuthPaper>
    </Container>
  );
};

export default Auth;

import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { NextPage } from 'next';
import Head from 'next/head';

import { AuthPaper, AuthAvatar } from '../styles/authStyled';
import { User } from '../resources/interfaces';
import { useAuthState, useDialogState } from '../resources/context';
import { AuthForm, Dialog } from '../components';
import { useSelector } from 'react-redux';

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
  const resultDialog = useSelector((state: any) => state.dialog);
  const { signIn, signUp } = useAuthState();
  const { open, setOpen, closeDialog } = useDialogState();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (isSignUp) {
        signUp(userData);
        setOpen(true);
    } else {
      signIn(userData);
    }
  };

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const switchMode = () => setIsSignUp((prevIsSignUp) => !prevIsSignUp);

  return (
    <>
      <Head>
        <title>Sign In | IT Memes World</title>
      </Head>
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
          {open && (
            <Dialog
              setOpen={setOpen}
              open={open}
              closeDialog={closeDialog}
              title='Auth result'
            >
              {resultDialog?.dialog?.message}
            </Dialog>
          )}
        </AuthPaper>
      </Container>
    </>
  );
};

export default Auth;

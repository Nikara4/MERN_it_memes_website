import { useState } from 'react';
import { Container } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { NextPage } from 'next';

import { AuthPaper, AuthAvatar } from '../styles/authStyled';
import { User } from '../resources/interfaces';
import { useAuthState, useDialogState } from '../resources/context';
import { AuthForm, Dialog } from '../components';

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
  const { signIn, signUp } = useAuthState();
  const { open, setOpen, closeDialog } = useDialogState();

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
        {open && (
          <Dialog
            setOpen={setOpen}
            open={open}
            closeDialog={closeDialog}
            title='Auth result'
          >
            Your account has been successfully created. You can now login.
          </Dialog>
        )}
      </AuthPaper>
    </Container>
  );
};

export default Auth;

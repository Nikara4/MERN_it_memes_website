import useStyles from '../styles/authStyles';
import { useState } from 'react';
import {
  Container,
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
} from '@mui/material';
import { NextPage } from 'next';
import { LockOutlined } from '@mui/icons-material';

import { Input } from '../components';

const Auth: NextPage = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleChange = () => console.log('change');

  const handleSubmit = () => console.log('submit');

  const switchMode = () => setIsSignup((prevIsSignup) => !prevIsSignup);

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography variant='h5'>{isSignup ? `Sign Up` : `Sign In`}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  half
                  handleChange={handleChange}
                  name='firstName'
                  label='First Name'
                  className={classes.input}
                />
                <Input
                  half
                  handleChange={handleChange}
                  name='secondName'
                  label='Second Name'
                  className={classes.input}
                />
              </>
            )}
            <Input
              handleChange={handleChange}
              name='email'
              label='Email'
              className={classes.input}
              type='email'
            />

            <Input
              handleChange={handleChange}
              name='password'
              label='Password'
              className={classes.input}
              type={showPassword ? 'text' : 'password'}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <>
                <Input
                  handleChange={handleChange}
                  name='confirmPassword'
                  label='Repeat Password'
                  className={classes.input}
                  type={showPassword ? 'text' : 'password'}
                  handleShowPassword={handleShowPassword}
                />
              </>
            )}
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            {isSignup ? `Sign Up` : `Sign In`}
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup ? `Already have an account? Sign In` : `Don't have an account? Sign Up`}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;

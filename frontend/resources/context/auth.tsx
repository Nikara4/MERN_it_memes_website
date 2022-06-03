import { createContext, useContext, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { User } from '../interfaces';
import { BASE_URL } from '../../pages/api';
import { addDialog } from '../../state/actions/dialog';

const AuthContext = createContext(null);

export function AuthProvider({ children }: any) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const [token, setToken] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const userProfile = localStorage.getItem('profile');
    const user = userProfile ? JSON.parse(userProfile) : null;

    // dispatch(
    //   addDialog({
    //     message: '',
    //     severity: 'success',
    //   })
    // );

    if (user) {
      setIsLoggedIn(true);
      setUserInfo(user?.user);
      setToken(user?.token);
    } else {
      setIsLoggedIn(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  const signIn = (userData: User) => {
    axios({
      method: 'POST',
      data: {
        userName: userData.userName,
        password: userData.password,
      },
      withCredentials: true,
      url: `${BASE_URL}/user/signin`,
    }).then((res: AxiosResponse) => {
      localStorage.setItem('profile', JSON.stringify(res.data));
      router.push('/');
    });
  };

  const signUp = (userData: any) => {
    axios({
      method: 'POST',
      data: userData,
      withCredentials: true,
      url: `${BASE_URL}/user/signup`,
    })
      .then((res: AxiosResponse) => {
        // alert('Your account has been successfully created. You can now login.')
        dispatch(
          addDialog({
            message:
              'Your account has been successfully created. You can now login.',
            severity: 'success',
          })
        );
        return res.data;
      })
      .catch((err) => {
        dispatch(
          addDialog({
            message: 'Something went wrong with the Sign Up. Please try again or contact us.',
            severity: 'failure',
          })
        );
        // alert(
        //   'Something went wrong with the Sign Up. Please try again or contact us.'
        // );
        return console.log(err);
      });
  };

  const logout = () => {
    axios({
      method: 'GET',
      withCredentials: true,
      url: `${BASE_URL}/user/logout`,
    }).then((res: AxiosResponse) => {
      localStorage.clear();
      setUserInfo(null);
      setIsLoggedIn(false);
    });
  };

  const state = {
    signIn,
    signUp,
    isLoggedIn,
    userInfo,
    token,
    logout,
  };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
}

export function useAuthState() {
  const state = useContext(AuthContext);

  if (state === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider');
  }

  return state;
}

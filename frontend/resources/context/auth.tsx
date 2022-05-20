import { createContext, useContext, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';

import { User } from '../interfaces';
import { BASE_URL } from '../../pages/api';
import { user } from '../userProfile';

const AuthContext = createContext(null);

export function AuthProvider({ children }: any) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [token, setToken] = useState('');
  const router = useRouter();

  useEffect(() => {
    axios({
      method: 'GET',
      withCredentials: true,
      url: `${BASE_URL}/user`,
    }).then((res: AxiosResponse) => {
      if(user) {
        setIsLoggedIn(true);
        setUserInfo(res.data);
        setToken(user?.token);
        console.log('user should be logged in')
      } else {
        // setIsLoggedIn(false);
        // localStorage.clear();
        console.log('user should be logged out')
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const logout = () => {
    axios({
      method: 'GET',
      withCredentials: true,
      url: `${BASE_URL}/user/logout`,
    }).then((res: AxiosResponse) => {
      localStorage.clear();
      setUserInfo(null);
      setIsLoggedIn(false);
      console.log('user should be logged out and cleared from localStorage')
    });
  };

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
      console.log('user should be signed in')
    });
  };

  const signUp = (userData: User) => {
    axios({
      method: 'POST',
      data: userData,
      withCredentials: true,
      url: `${BASE_URL}/user/signup`,
    }).then((res: AxiosResponse) => {
      router.push('/');
      console.log('user should be created')
      return res.data;
    }).catch((err) => console.log(err))
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
    throw new Error('useAuthState must be used within a UserProvider');
  }

  return state;
}

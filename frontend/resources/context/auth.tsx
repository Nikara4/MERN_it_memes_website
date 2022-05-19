import { createContext, useContext, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import { User } from '../interfaces';
import { BASE_URL } from '../../pages/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }: any) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    axios({
      method: 'GET',
      withCredentials: true,
      url: `${BASE_URL}/user`,
    }).then((res: AxiosResponse) => {
      setUserInfo(res.data);
      setToken(res.data.token);
      setIsLoggedIn(() => (res.data ? true : false));
    });
  }, []);

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
      const user = localStorage.setItem('profile', JSON.stringify(res.data));
      window.location.href = '/';
      return user;
    });
  };

  const signUp = (userData: User) => {
    axios({
      method: 'POST',
      data: userData,
      withCredentials: true,
      url: `${BASE_URL}/user/signup`,
    }).then((res: AxiosResponse) => {
      return res.data;
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
    throw new Error('useAuthState must be used within a UserProvider');
  }

  return state;
}

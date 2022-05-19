import { createContext, useContext, useEffect, useState } from 'react';
import * as api from '../../pages/api';
import decode from 'jwt-decode';
import { User } from '../interfaces';
import { useRouter } from 'next/router';
// import { user } from '../userProfile';

const AuthContext = createContext(null);

export function AuthProvider({ children }: any) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const router = useRouter();

  let userProfile: any;

  if (typeof window !== 'undefined') {
    userProfile = localStorage.getItem('profile');
  }

  const user = userProfile ? JSON.parse(userProfile) : null;

  useEffect(() => {
    setUserInfo(user);
    setToken(user?.token);

    // console.log(isLoggedIn)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userProfile]);

  const signInUser = (userData: User) => {
    api.signIn(userData);
    setUserInfo(user);
    user ? setIsLoggedIn(true) : console.log('no user');
    // window.location.reload();
    router.push('/');
  };

  const signUpUser = (userData: User) => {
    api.signUp(userData);
    setUserInfo(user);
    setIsLoggedIn(true);
    // window.location.reload();
    router.push('/');
  };

  const logoutUser = () => {
    localStorage.clear();
    setUserInfo(null);
    setIsLoggedIn(false);
    router.push('/');
    // window.location.reload();
  };

  if (token) {
    const decodedToken: any = decode(token);

    if (decodedToken.exp * 1000 < new Date().getTime()) logoutUser();
  }

  const state = {
    userInfo,
    isLoggedIn,
    token,
    logoutUser,
    signInUser,
    signUpUser
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

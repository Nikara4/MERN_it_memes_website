import { useState, useEffect } from 'react';

let userProfile: any;

if (typeof window !== 'undefined') {
  userProfile = localStorage.getItem('profile');
}

export const user = userProfile ? JSON.parse(userProfile) : null;

const useExample = (apiOptions: any) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    console.log('effect triggered');
    
    setUserInfo(user)
    console.log(userInfo);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiOptions]);

  return {
    userInfo, setUserInfo
  };
};

export default useExample;
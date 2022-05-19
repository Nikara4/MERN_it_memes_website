let userProfile: any;

if (typeof window !== 'undefined') {
    userProfile = localStorage.getItem('profile');
  }

export const user = userProfile ? JSON.parse(userProfile) : null;

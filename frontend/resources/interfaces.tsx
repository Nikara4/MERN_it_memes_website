import { SnackbarCloseReason } from '@mui/material';
import { MouseEventHandler } from 'react';

export interface User {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface Post {
  _id?: string;
  author?: string;
  userName: string;
  title: string;
  tags: string[];
  selectedFile: string;
  likes?: string[];
  dislikes?: string[];
  createdAt?: string;
}

export interface UploadPost {
  title: string;
  tags: string[];
  selectedFile: string;
}

export interface PostProps {
  setCurrentId: Function;
  post: Post;
  handleClickOpen: Function;
}

export interface HeaderProps {
  showMobileMenu: boolean;
  isMobile: boolean;
  setShowMobileMenu: Function;
}

export interface UploadFormProps {
  postData: UploadPost;
  setPostData: Function;
  handleSubmit: MouseEventHandler<HTMLButtonElement>;
  clearForm: MouseEventHandler<HTMLButtonElement>;
}

export interface AuthFormProps {
  isSignUp: boolean;
  userData: User;
  setUserData: Function;
  handleShowPassword: MouseEventHandler<any>;
  showPassword: boolean;
  handleSubmit: MouseEventHandler<HTMLButtonElement>;
  switchMode: MouseEventHandler<HTMLButtonElement>;
}

export type PostTypeState = { posts: Post[] };

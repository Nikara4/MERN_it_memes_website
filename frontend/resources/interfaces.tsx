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
  _id: string;
  author: string;
  userName: string;
  title: string;
  tags: string[];
  selectedFile: string;
  likes: string[];
  dislikes: string[];
  createdAt: string;
}

export interface UploadPost {
  title: string;
  tags: string[];
  selectedFile: string;
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
  showSnackbar: boolean;
  handleCloseSnackbar: (
    event: React.SyntheticEvent<any> | Event,
    reason: SnackbarCloseReason
  ) => void;
}

export type PostTypeState = { posts: Post[] };

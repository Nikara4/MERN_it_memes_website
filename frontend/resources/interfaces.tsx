import { FormEventHandler, MouseEventHandler, ChangeEventHandler } from 'react';

type T = any;

export interface User {
  _id?: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface PostInterface {
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
  post: PostInterface;
  handleClickOpen: Function;
  user: any;
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
  user: User,
}

export interface AuthFormProps {
  isSignUp: boolean;
  userData: User;
  setUserData: Function;
  handleShowPassword: MouseEventHandler<any>;
  showPassword: boolean;
  handleSubmit: FormEventHandler<T> | undefined;
  switchMode: MouseEventHandler<HTMLButtonElement>;
}

export type PostTypeState = { posts: PostInterface[] };

export interface InputProps {
  value?: any,
  half?: boolean;
  handleChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  name?: string;
  label?: string;
  type?: string;
  handleShowPassword?: MouseEventHandler<T> | undefined;
  required?: boolean;
  fullWidth?: boolean;
}

export interface User {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
  };

  export interface PostInterface {
    _id: string;
    author: string;
    userName: string;
    title: string;
    tags: string[];
    selectedFile: string;
    likes: string[];
    dislikes: string[];
    createdAt: string;
};

export type PostTypeState = { posts: PostInterface[] };
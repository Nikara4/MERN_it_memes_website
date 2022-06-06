import axios from 'axios';
import { PostInterface } from '../../resources/interfaces';

export const BASE_URL = 'https://it-memes-app.herokuapp.com';
//https://it-memes-app.herokuapp.com

const API = axios.create({ baseURL: BASE_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers['Authorization'] = `${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }

  return req;
});

// export const getUser = () => API.get(`/user/protected`);

export const fetchPosts = () => API.get('/posts');

export const getSinglePost = (id: string) => API.get(`/posts/${id}`);

export const createPost = (newPost: PostInterface) => API.post('/posts', newPost);

export const updatePost = (id: string, updatedPost: PostInterface) =>
  API.patch(`/posts/${id}`, updatedPost);

export const deletePost = (id: string) => API.delete(`/posts/${id}`);

export const likePost = (id: string) => API.patch(`/posts/${id}/like`);

export const dislikePost = (id: string) => API.patch(`/posts/${id}/dislike`);
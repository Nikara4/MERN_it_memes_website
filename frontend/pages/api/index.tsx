import axios from 'axios';
import { Post } from '../../resources/interfaces';

export const BASE_URL = 'http://localhost:5000';

const API = axios.create({ baseURL: BASE_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers['Authorization'] = `${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }

  return req;
});

export const fetchPosts = () => API.get('/posts');

export const getSinglePost = (id: string) => API.get(`/protected/posts/${id}`);

export const createPost = (newPost: Post) => API.post('/protected/posts', newPost);

export const updatePost = (id: string, updatedPost: Post) =>
  API.patch(`/protected/posts/${id}`, updatedPost);

export const deletePost = (id: string) => API.delete(`/protected/posts/${id}`);

export const likePost = (id: string) => API.patch(`/protected/posts/${id}/like`);

export const dislikePost = (id: string) => API.patch(`/protected/posts/${id}/dislike`);
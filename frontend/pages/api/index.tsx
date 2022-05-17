import axios from 'axios';
import { Post, User } from '../../resources/interfaces';

const BASE_URL = 'http://localhost:5000';

const API = axios.create({ baseURL: BASE_URL });

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem('profile')) {
//     req.headers['Authorization'] = `Bearer ${
//       JSON.parse(localStorage.getItem('profile')).token
//     }`;
//   }

//   return req;
// });

export const fetchPosts = () => API.get('/posts');

export const getSinglePost = (id: string) => API.get(`/posts/${id}`);

export const createPost = (newPost: Post) => API.post('/posts', newPost);

export const updatePost = (id: string, updatedPost: Post) =>
  API.patch(`/posts/${id}`, updatedPost);

export const deletePost = (id: string) => API.delete(`/posts/${id}`);

export const likePost = (id: string) => API.patch(`/posts/${id}/like`);

export const dislikePost = (id: string) => API.patch(`/posts/${id}/dislike`);

// export const signIn = (userData: User) => API.post('/user/signin', userData);

// export const signUp = (userData: User) => API.post('/user/signup', userData);

// export const fetchUser = () => API.get('/user');

export const signUp = (userData: User) =>
  API.post(`/user/signup`, userData)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

// export const signUp = (userData: User) => {
//   axios({
//     method: 'POST',
//     data: { userData },
//     withCredentials: true,
//     url: `${BASE_URL}/user/signup`,
//   }).then((res) => console.log('co jest'));
// };

export const signIn = (userData: User) => {
  axios({
    method: 'POST',
    data: { userData },
    withCredentials: true,
    url: `${BASE_URL}/user/signin`,
  }).then((res) => console.log(res));
};

export const getUser = (setData: Function) => {
  axios({
    method: 'GET',
    withCredentials: true,
    url: `${BASE_URL}/user/getuser`,
  }).then((res) => {
    setData(res.data);
    console.log(res.data);
  });
};

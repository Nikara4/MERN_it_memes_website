import axios from "axios";
import { PostInterface } from '../../state/types';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);

export const getSinglePost = (id: string) => axios.get(`${url}/${id}`);

export const createPost = (newPost: PostInterface) => axios.post(url, newPost);

export const updatePost = (id: string, updatedPost: PostInterface) => axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id: string) => axios.delete(`${url}/${id}`);

export const likePost = (id: string) => axios.patch(`${url}/${id}/likePost`);

export const dislikePost = (id: string) => axios.patch(`${url}/${id}/dislikePost`);


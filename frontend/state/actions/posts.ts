import * as api from '../../pages/api';
import { Dispatch } from 'redux';

import { postActionTypes } from '../constants';
import { AppThunk } from '../Store';
import { Post } from '../../resources/interfaces'

const {
    FETCH_ALL_POSTS,
    FETCH_SINGLE_POST,
    UPLOAD_POST,
    UPDATE_POST,
    DELETE_POST,
    LIKE_POST,
    DISLIKE_POST }
    = postActionTypes;

export const getPosts = (): AppThunk => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({
            type: FETCH_ALL_POSTS,
            payload: data
        });
    } catch (e) {
        console.log(e);
    }
}

export const getSinglePost = (id: string): AppThunk => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.getSinglePost(id);
        dispatch({
            type: FETCH_SINGLE_POST,
            payload: data
        });
    } catch (e) {
        console.log(e);
    }
}

export const uploadPost = (post: Post): AppThunk => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({
            type: UPLOAD_POST,
            payload: data
        })
    } catch (e) {
        console.log(e);
    }
}

export const updatePost = (id: string, post: Post): AppThunk => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({
            type: UPDATE_POST,
            payload: data
        })
    } catch (e) {
        console.log(e);
    }
}

export const deletePost = (id: string): AppThunk => async (dispatch: Dispatch<any>) => {
    try {
        await api.deletePost(id);
        dispatch({
            type: DELETE_POST,
            payload: id
        })
    } catch (e) {
        console.log(e);
    }
}

export const likePost = (id: string): AppThunk => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.likePost(id);
        dispatch({
            type: LIKE_POST,
            payload: data
        })
    } catch (e) {
        console.log(e);
    }
}

export const dislikePost = (id: string): AppThunk => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.dislikePost(id);
        dispatch({
            type: DISLIKE_POST,
            payload: data
        })
    } catch (e) {
        console.log(e);
    }
}
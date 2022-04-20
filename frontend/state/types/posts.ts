import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk';

import { posts } from '../constants/posts';

const {
    FETCH_ALL_POSTS,
    FETCH_SINGLE_POST,
    UPLOAD_POST,
    UPDATE_POST,
    DELETE_POST,
    LIKE_POST,
    DISLIKE_POST }
    = posts;

export type MemePost = {
        id: string,
        author: string;
        title: string;
        tags: string[];
        selectedFile: string;
        likes: string[];
        dislikes: string[];
        createdAt: string;
};

export type MemePostsType = {
    posts: MemePost[];
};

// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   MemeAction
// >;

interface GetAction {
    type: typeof FETCH_ALL_POSTS,
    payload: MemePostsType
}

interface SingleAction {
    type: typeof FETCH_SINGLE_POST,
    payload: MemePostsType
}

interface UploadAction {
    type: typeof UPLOAD_POST,
    payload: MemePostsType
}

interface UpdateAction {
    type: typeof UPDATE_POST,
    payload: MemePostsType
}

interface DeleteAction {
    type: typeof DELETE_POST,
    payload: MemePostsType
}

interface LikeAction {
    type: typeof LIKE_POST,
    payload: MemePostsType
}

interface DislikeAction {
    type: typeof DISLIKE_POST,
    payload: MemePostsType
}

export type MemeActionTypes = GetAction | SingleAction | UploadAction | UpdateAction | DeleteAction | LikeAction | DislikeAction
// export type DispatchType = (args: AnyAction) => AnyAction;
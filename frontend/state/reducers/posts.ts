import { AnyAction } from 'redux'
import { postActionTypes } from '../constants/posts';
import { PostTypeState } from '../types'

const {
    FETCH_ALL_POSTS,
    FETCH_SINGLE_POST,
    UPLOAD_POST,
    UPDATE_POST,
    DELETE_POST,
    LIKE_POST,
    DISLIKE_POST }
    = postActionTypes;

const initialState = {
    data: [],
} as PostTypeState;

// eslint-disable-next-line import/no-anonymous-default-export
const postsReducer = (
    state = initialState,
    action: AnyAction
    ) => {
    switch (action.type) {
        case FETCH_ALL_POSTS:
            return action['payload'];
        case FETCH_SINGLE_POST:
            return action['payload'];
        case UPLOAD_POST:
            return [...state.data, action['payload']];
        case UPDATE_POST:
        case LIKE_POST:
        case DISLIKE_POST:
            return state.data.map((post) =>
        post._id === action?.['payload']?._id ? action['payload'] : post
      );
        case DELETE_POST:
            return state.data.filter((post) => post._id !== action['payload']);
        default:
            return state;
    }
}

export default postsReducer;

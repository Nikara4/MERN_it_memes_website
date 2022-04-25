import { AnyAction } from 'redux'
import { postActionTypes } from '../constants/posts';
import { PostTypeState, PostInterface } from '../types'

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
    posts: [],
} as PostTypeState;

// eslint-disable-next-line import/no-anonymous-default-export
const postsReducer = (
    state = initialState,
    action: AnyAction
    ) => {
    switch (action.type) {
        case FETCH_ALL_POSTS:
            //console.log(action['payload'].data)
            console.log(state.posts)
            return action['payload'];
        case FETCH_SINGLE_POST:
            return action['payload'];
        case UPLOAD_POST:
            return [...state.posts, action['payload']];
        case UPDATE_POST:
        case LIKE_POST:
        case DISLIKE_POST:
            console.log(action['payload'])
            console.log(state.posts)
            return state.posts.map((post: PostInterface) =>
        post._id === action?.['payload']?._id ? action['payload'] : post
      );
        case DELETE_POST:
            return state.posts.filter((post: PostInterface) => post._id !== action['payload']);
        default:
            return state;
    }
}

export default postsReducer;

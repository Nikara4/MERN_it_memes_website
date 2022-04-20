import { MemePostsType, MemePost, MemeActionTypes } from '../types/posts';
// import { AnyAction } from 'redux';
import { postActionTypes } from '../constants/posts';

const {
    FETCH_ALL_POSTS,
    FETCH_SINGLE_POST,
    UPLOAD_POST,
    UPDATE_POST,
    DELETE_POST,
    LIKE_POST,
    DISLIKE_POST }
    = postActionTypes;

interface DefaultMemeType {
    posts?: MemePostsType,
}

const memePostsInitialState: DefaultMemeType = {}

// eslint-disable-next-line import/no-anonymous-default-export
const postsReducer = (
    state: DefaultMemeType = memePostsInitialState,
    action: MemeActionTypes
    ): DefaultMemeType => {
    switch (action.type) {
        case FETCH_ALL_POSTS:
            return action.payload;
        // case FETCH_SINGLE_POST:
        //     return state;
        case UPLOAD_POST:
              return {
                ...state.posts, action?.payload
              }
        case UPDATE_POST:
        case LIKE_POST:
        case DISLIKE_POST:
            return posts.map((post: MemePost) => post.id === action.payload.id ? action.payload : post);
        case DELETE_POST:
            const updatedPosts: MemePost[] = state.posts.filter(
                post => post.id !== action['payload'].id
              )
              return {
                ...state,
                posts: updatedPosts,
              }
        default:
            return state;
    }
}

export default postsReducer;

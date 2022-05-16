import thunk, { ThunkMiddleware, ThunkAction } from 'redux-thunk';
import {
  createStore,
  applyMiddleware,
  AnyAction,
} from 'redux';
import postsReducer from './reducers/posts';
import usersReducer from './reducers/auth';
import { createLogger } from 'redux-logger';

const initialState: any = { 
  posts: [],
  users: null,
};

export const rootReducer = (state = initialState, action: AnyAction) => {
  return {
    posts: postsReducer(state.posts, action),
    users: usersReducer(state.users, action),
  };
};

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof rootReducer;

const logger = createLogger();

export const store = createStore<RootState, AnyAction, {}, {}>(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<RootState, AnyAction>, logger)
);

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

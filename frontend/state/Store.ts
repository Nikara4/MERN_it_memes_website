import thunk, { ThunkMiddleware, ThunkAction } from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware, AnyAction } from 'redux';
import postsReducer from "./reducers/posts";
import { createLogger } from 'redux-logger';

export const rootReducer = combineReducers({ posts: postsReducer });

type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts}
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
>
import { AnyAction } from 'redux';
import { authActionTypes } from '../constants';

const { AUTH, LOGOUT } = authActionTypes;

const usersReducer = (state: any, action: AnyAction) => {
  switch (action.type) {
    case AUTH:
        localStorage.setItem("profile", JSON.stringify({ ...action?.['payload'] }));
      return {...state, authData: action['payload']};
    case LOGOUT:
      return localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default usersReducer;

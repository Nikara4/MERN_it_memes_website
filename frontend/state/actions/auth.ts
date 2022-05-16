import * as api from '../../pages/api';
import { Dispatch } from 'redux';

import { authActionTypes } from '../constants';
import { AppThunk } from '../Store';
import { User } from '../../resources/interfaces';

const { AUTH } = authActionTypes;

// Action Creators

export const signIn =
  (userData: User): AppThunk =>
  async (dispatch: Dispatch) => {
    try {
      const { data } = await api.signIn(userData);
      dispatch({
        type: AUTH,
        payload: data,
      });

    } catch (e) {
      console.log(e);
    }
  };

export const signUp =
  (userData: User): AppThunk =>
  async (dispatch: Dispatch) => {
    try {
      const { data } = await api.signUp(userData);
      dispatch({
        type: AUTH,
        payload: data,
      });

    } catch (e) {
      console.log(e);
    }
  };


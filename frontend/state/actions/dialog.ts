import { Dispatch } from 'redux';
import { dialogContent } from '../constants';

const { DIALOG_ADD, DIALOG_REMOVE } = dialogContent;

export const addDialog = (data: any) => ({
  type: DIALOG_ADD,
  payload: data,
});

export const removeDialog = (id: any) => {
  (dispatch: Dispatch) => {
    dispatch({
      type: DIALOG_REMOVE,
      payload: id,
    });
  };
};

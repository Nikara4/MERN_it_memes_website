import { AnyAction } from 'redux';
import { dialogContent } from '../constants';

const { DIALOG_ADD } = dialogContent;

const dialogReducer = (state: any, action: AnyAction) => {
  switch (action.type) {
    case DIALOG_ADD:
      return {
        ...state,
        dialog: action['payload'],
      };
    default:
      return state;
  }
};

export default dialogReducer;

import { dialogContent } from '../constants';

const { DIALOG_ADD } = dialogContent;

export const addDialog = (data: any) => ({
  type: DIALOG_ADD,
  payload: data,
});

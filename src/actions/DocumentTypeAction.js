/* eslint-disable */
import api from '../Utils/api';

import { User_ERROR } from './types';

export const AddFolderType = async (dispatch, folderType) => {
  try {
    const res = await api.post('/folderType', folderType);
    return res;
  } catch (err) {
    dispatch({
      type: User_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const GetFolderType = async (dispatch) => {
  try {
    const res = await api.get('/folderType');
    return res;
  } catch (err) {
    dispatch({
      type: User_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const DeleteFolderType = async (id) => {
  try {
    const res = await api.delete('/folderType', { data: { id } });
    return res;
  } catch (err) {
    dispatch({
      type: User_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

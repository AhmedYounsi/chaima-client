/* eslint-disable */
import api from '../Utils/api';
import { setAlert } from './alert';

import { GET_User, GET_Users, User_ERROR, ADD_OFFICE } from './types';

export const AddOffice = async (dispatch, office) => {
  try {
    const res = await api.post('/office', office);
    return res;
  } catch (err) {
    dispatch({
      type: User_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const GetOffice = async (dispatch) => {
  try {
    const res = await api.get('/office');
    return res;
  } catch (err) {
    dispatch({
      type: User_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const DeleteOffice = async (id) => {
  try {
    const res = await api.delete('/office', { data: { id } });
    return res;
  } catch (err) {
    dispatch({
      type: User_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

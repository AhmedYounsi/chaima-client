/* eslint-disable */
import api from '../Utils/api';

import { User_ERROR } from './types';

export const AddOffice = async (dispatch, office) => {
  try {
    const res = await api.post('/offices', office);
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
    const res = await api.get('/offices');
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
    const res = await api.delete('/offices', { data: { id } });
    return res;
  } catch (err) {
    dispatch({
      type: User_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

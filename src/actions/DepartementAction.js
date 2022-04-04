/* eslint-disable */
import api from '../Utils/api';

import { User_ERROR } from './types';

export const AddDepartement = async (dispatch, departement) => {
  try {
    const res = await api.post('/departements', departement);
    return res;
  } catch (err) {
    dispatch({
      type: User_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const GetDepartement = async (dispatch) => {
  try {
    const res = await api.get('/departements');
    return res;
  } catch (err) {
    dispatch({
      type: User_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const DeleteDepartement = async (id) => {
  try {
    const res = await api.delete('/departements', { data: { id } });
    return res;
  } catch (err) {
    dispatch({
      type: User_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

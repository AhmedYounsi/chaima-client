/* eslint-disable */
import api from '../Utils/api';

import { User_ERROR } from './types';

export const AddContractType = async (dispatch, contractType) => {
  try {
    const res = await api.post('/contractType', contractType);
    return res;
  } catch (err) {
    dispatch({
      type: User_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const GetContractType = async (dispatch) => {
  try {
    const res = await api.get('/contractType');
    return res;
  } catch (err) {
    dispatch({
      type: User_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const DeleteContractType = async (id) => {
  try {
    const res = await api.delete('/contractType', { data: { id } });
    return res;
  } catch (err) {
    dispatch({
      type: User_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

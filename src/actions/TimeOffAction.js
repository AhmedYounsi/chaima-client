/* eslint-disable */
import api from '../Utils/api';

import { User_ERROR } from './types';

export const AddTimeOffType = async (dispatch, timeOffType) => {
  try {
    const res = await api.post('/timeOff', timeOffType);
    return res;
  } catch (err) {
    dispatch({
      type: User_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const GetTimeOffType = async (dispatch) => {
  try {
    const res = await api.get('/timeOff');
    return res;
  } catch (err) {
    dispatch({
      type: User_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const DeleteTimeOffType = async (id) => {
  try {
    const res = await api.delete('/timeOff', { data: { id } });
    return res;
  } catch (err) {
    dispatch({
      type: User_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

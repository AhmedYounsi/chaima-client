import api from '../Utils/api';

import { GET_User, User_ERROR } from './types';
import { LoadingAction } from './LoadingAction';

// Get current users profile
export const getCurrentUser = () => async (dispatch) => {
  try {
    const res = await api.get('/users');

    dispatch({
      type: 'SET_USER',
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: 'SetAlert',
      payload: { message: err.response.data.msg, type: 'error' },
    });
  }
};

export const getUsers = async (dispatch) => {
  try {
    const res = await api.get('/users/users');
    return res;
  } catch (err) {
    dispatch({
      type: User_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
// Get all profiles

// Create or update User
export const CreateUser = async (user, dispatch, navigate) => {
  try {
    LoadingAction(true, dispatch);
    const res = await api.post('/users', user);
    LoadingAction(false, dispatch);
    navigate('/employees');
    dispatch({
      type: 'SetAlert',
      payload: {
        type: 'success',
        message: 'Profile updated successfully !',
      },
    });
  } catch (err) {
    dispatch({
      type: 'SetAlert',
      payload: { message: err.response.data.msg, type: 'error' },
    });
  }
};

export const UpdateUser = async (user, dispatch) => {
  LoadingAction(true, dispatch);
  try {
    const res = await api.post('/users/update', user);
    LoadingAction(false, dispatch);
    window.scrollTo(0, 0);
    dispatch({
      type: 'SET_USER',
      payload: res.data,
    });
    dispatch({
      type: 'SetAlert',
      payload: {
        type: 'success',
        message: 'Profile updated successfully !',
      },
    });
    return res;
  } catch (err) {
    LoadingAction(false, dispatch);
    dispatch({
      type: 'SetAlert',
      payload: { message: err.response.data.msg, type: 'error' },
    });
  }
};

export const UpdatePassword = async (data, dispatch) => {
  LoadingAction(true, dispatch);
  try {
    const res = await api.post('/users/update_password', data);
    LoadingAction(false, dispatch);
    window.scrollTo(0, 0);
    dispatch({
      type: 'SetAlert',
      payload: {
        type: 'success',
        message: 'Password updated successfully !',
      },
    });
    return res;
  } catch (err) {
    LoadingAction(false, dispatch);
    dispatch({
      type: 'SetAlert',
      payload: { message: err.response.data.msg, type: 'error' },
    });
  }
};

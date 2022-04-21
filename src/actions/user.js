import api from '../Utils/api';
import { setAlert } from './alert';

import { GET_User, User_ERROR } from './types';
import { LoadingAction } from './LoadingAction';

// Get current users profile
export const getCurrentUser = () => async (dispatch) => {
  try {
    const res = await api.get('/users');

    dispatch({
      type: GET_User,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: User_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
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
export const createProfile =
  (formData, history, edit = false) =>
    async (dispatch) => {
      try {
        const res = await api.post('/users', formData);
        if (res.data) {
          return true;
        }
        dispatch({
          type: GET_User,
          payload: res.data,
        });

        dispatch(setAlert(edit ? 'User Updated' : 'Usser Created', 'success'));

        if (!edit) {
          history.push('/dashboard');
        }
      } catch (err) {
        const errors = err.response;

        if (errors) {
          errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
          type: User_ERROR,
          payload: { msg: err.response.statusText, status: err.response.status },
        });
      }
    };

export const UpdateUser = async (user, dispatch) => {
  LoadingAction(true, dispatch)
  try {
    const res = await api.post('/users/update', user);
    LoadingAction(false, dispatch)
    window.scrollTo(0, 0)
    dispatch({
      type: "SET_USER",
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
    LoadingAction(false, dispatch)
    console.log(err)
  }
};


export const UpdatePassword = async (data, dispatch) => {

  LoadingAction(true, dispatch)
  try {
    const res = await api.post('/users/update_password', data);
    LoadingAction(false, dispatch)
    window.scrollTo(0, 0)
    dispatch({
      type: 'SetAlert',
      payload: {
        type: 'success',
        message: 'Password updated successfully !',
      },
    });
    return res;
  } catch (err) {
    LoadingAction(false, dispatch)
    console.log(err)
  }
};
import api from '../Utils/api';
import { setAlert } from './alert';

import { GET_User, GET_Users, User_ERROR, CLEAR_PROFILE } from './types';

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

// Get all profiles
export const getUsers = () => async (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });

  try {
    const res = await api.get('/users/users');

    dispatch({
      type: GET_Users,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: User_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

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

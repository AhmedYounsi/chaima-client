/* eslint-disable */
import api from "../Utils/api";
import { setAlert } from "./alert";
import { LoadingAction } from "./LoadingAction";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get("/users");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = (formData) => async (dispatch) => {
  try {
    const res = await api.post("/users", formData);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const LoginAction = async (email, password, dispatch) => {
  LoadingAction(true, dispatch);
  const body = { email, password };
  try {
    const res = await api.post("/users/signin", body);

    LoadingAction(false, dispatch);
    dispatch({
      type: "SET_TOKEN",
      payload: res.data.token,
    });
    dispatch({
      type: "SET_USER",
      payload: res.data.user,
    });
  } catch (err) {
    LoadingAction(false, dispatch);
    dispatch({
      type: "SetAlert",
      payload: { message: err.response.data.msg, type: "error" },
    });
  }
};

// Logout
export const logout = () => ({ type: LOGOUT });

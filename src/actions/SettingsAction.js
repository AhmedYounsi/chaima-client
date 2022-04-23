/* eslint-disable */
import api from '../Utils/api';

import { User_ERROR } from './types';

//office
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

// Departement
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

//Document

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

//Contract
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

//Time Off
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

//Post Title

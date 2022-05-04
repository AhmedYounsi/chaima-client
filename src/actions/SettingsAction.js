/* eslint-disable */
import api from '../Utils/api';

import { User_ERROR } from './types';
import { LoadingAction } from './LoadingAction';

//office
export const AddOffice = async (dispatch, office) => {
  try {
    const res = await api.post('/offices', office);
    return res;
  } catch (err) {
    dispatch({
      type: 'SetAlert',
      payload: { message: 'Add office error', type: 'error' },
    });
  }
};

export const GetOffice = async (dispatch) => {
  try {
    const res = await api.get('/offices');
    return res;
  } catch (err) {
    dispatch({
      type: 'SetAlert',
      payload: { message: 'cannot get offices', type: 'error' },
    });
  }
};

export const DeleteOffice = async (id) => {
  try {
    const res = await api.delete('/offices', { data: { id } });
    return res;
  } catch (err) {
    dispatch({
      type: 'SetAlert',
      payload: { message: 'delete office error', type: 'error' },
    });
  }
};

export const UpdateOffice = async (office, dispatch) => {
  LoadingAction(true, dispatch);
  try {
    const res = await api.post('/offices/update', office);
    LoadingAction(false, dispatch);
    window.scrollTo(0, 0);
    dispatch({
      type: 'SetAlert',
      payload: {
        type: 'success',
        message: 'WorkPlace updated successfully !',
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
// Departement
export const AddDepartement = async (dispatch, departement) => {
  try {
    const res = await api.post('/departements', departement);
    return res;
  } catch (err) {
    dispatch({
      type: 'SetAlert',
      payload: { message: err.response.data.msg, type: 'error' },
    });
  }
};

export const GetDepartement = async (dispatch) => {
  try {
    const res = await api.get('/departements');
    return res;
  } catch (err) {
    dispatch({
      type: 'SetAlert',
      payload: { message: err.response.data.msg, type: 'error' },
    });
  }
};

export const DeleteDepartement = async (id) => {
  try {
    const res = await api.delete('/departements', { data: { id } });
    return res;
  } catch (err) {
    dispatch({
      type: 'SetAlert',
      payload: { message: err.response.data.msg, type: 'error' },
    });
  }
};

export const UpdateDepartement = async (departement, dispatch) => {
  LoadingAction(true, dispatch);
  try {
    const res = await api.post('/departements/update', departement);
    LoadingAction(false, dispatch);
    window.scrollTo(0, 0);
    dispatch({
      type: 'SetAlert',
      payload: {
        type: 'success',
        message: 'Departement updated successfully !',
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

//Document

export const AddFolderType = async (dispatch, folderType) => {
  try {
    const res = await api.post('/folderType', folderType);
    return res;
  } catch (err) {
    dispatch({
      type: 'SetAlert',
      payload: { message: err.response.data.msg, type: 'error' },
    });
  }
};

export const GetFolderType = async (dispatch) => {
  try {
    const res = await api.get('/folderType');
    return res;
  } catch (err) {
    dispatch({
      type: 'SetAlert',
      payload: { message: err.response.data.msg, type: 'error' },
    });
  }
};

export const DeleteFolderType = async (id) => {
  try {
    const res = await api.delete('/folderType', { data: { id } });
    return res;
  } catch (err) {
    dispatch({
      type: 'SetAlert',
      payload: { message: err.response.data.msg, type: 'error' },
    });
  }
};
export const UpdateFolderType = async (type, dispatch) => {
  LoadingAction(true, dispatch);
  try {
    const res = await api.post('/folderType/update', type);
    LoadingAction(false, dispatch);
    window.scrollTo(0, 0);
    dispatch({
      type: 'SetAlert',
      payload: {
        type: 'success',
        message: 'Type Folder updated successfully !',
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

//Contract
export const AddContractType = async (dispatch, contractType) => {
  try {
    const res = await api.post('/contractType', contractType);
    return res;
  } catch (err) {
    dispatch({
      type: 'SetAlert',
      payload: { message: err.response.data.msg, type: 'error' },
    });
  }
};

export const GetContractType = async (dispatch) => {
  try {
    const res = await api.get('/contractType');
    return res;
  } catch (err) {
    dispatch({
      type: 'SetAlert',
      payload: { message: err.response.data.msg, type: 'error' },
    });
  }
};

export const DeleteContractType = async (id) => {
  try {
    const res = await api.delete('/contractType', { data: { id } });
    return res;
  } catch (err) {
    dispatch({
      type: 'SetAlert',
      payload: { message: err.response.data.msg, type: 'error' },
    });
  }
};

export const UpdateContractType = async (type, dispatch) => {
  LoadingAction(true, dispatch);
  try {
    const res = await api.post('/contractType/update', type);
    LoadingAction(false, dispatch);
    window.scrollTo(0, 0);
    dispatch({
      type: 'SetAlert',
      payload: {
        type: 'success',
        message: 'Type Contract updated successfully !',
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

//Time Off
export const AddTimeOffType = async (dispatch, timeOffType) => {
  try {
    const res = await api.post('/timeOff', timeOffType);
    return res;
  } catch (err) {
    dispatch({
      type: 'SetAlert',
      payload: { message: err.response.data.msg, type: 'error' },
    });
  }
};

export const GetTimeOffType = async (dispatch) => {
  try {
    const res = await api.get('/timeOff');
    return res;
  } catch (err) {
    dispatch({
      type: 'SetAlert',
      payload: { message: err.response.data.msg, type: 'error' },
    });
  }
};

export const DeleteTimeOffType = async (id) => {
  try {
    const res = await api.delete('/timeOff', { data: { id } });
    return res;
  } catch (err) {
    dispatch({
      type: 'SetAlert',
      payload: { message: err.response.data.msg, type: 'error' },
    });
  }
};

export const UpdateTimeOffType = async (type, dispatch) => {
  LoadingAction(true, dispatch);
  try {
    const res = await api.post('/timeOff/update', type);
    LoadingAction(false, dispatch);
    window.scrollTo(0, 0);
    dispatch({
      type: 'SetAlert',
      payload: {
        type: 'success',
        message: 'Type Time Off updated successfully !',
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

//Post Title
export const AddPostTitle = async (dispatch, postTitle) => {
  try {
    const res = await api.post('/posts', postTitle);
    return res;
  } catch (err) {
    dispatch({
      type: 'SetAlert',
      payload: { message: err.response.data.msg, type: 'error' },
    });
  }
};

export const GetPostTitle = async (dispatch) => {
  try {
    const res = await api.get('/posts/posts');
    return res;
  } catch (err) {
    dispatch({
      type: 'SetAlert',
      payload: { message: err.response.data.msg, type: 'error' },
    });
  }
};

export const DeletePostTitle = async (id) => {
  try {
    const res = await api.delete('/posts', { data: { id } });
    return res;
  } catch (err) {
    dispatch({
      type: 'SetAlert',
      payload: { message: err.response.data.msg, type: 'error' },
    });
  }
};
export const GetPostTileDep = async (id) => {
  try {
    const res = await api.post('/posts/single', { data: { id } });
    return res;
  } catch (err) {
    dispatch({
      type: 'SetAlert',
      payload: { message: err.response.data.msg, type: 'error' },
    });
  }
};

export const UpdatePostTitle = async (post, dispatch) => {
  LoadingAction(true, dispatch);
  try {
    const res = await api.post('/posts/update', post);
    LoadingAction(false, dispatch);
    window.scrollTo(0, 0);
    dispatch({
      type: 'SetAlert',
      payload: {
        type: 'success',
        message: 'Post Title updated successfully !',
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

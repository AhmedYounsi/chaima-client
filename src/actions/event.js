import api from '../Utils/api';
import { setAlert } from './alert';
import {
  GET_EVENTS,
  EVENT_ERROR,
  UPDATE_LIKES,
  DELETE_EVENT,
  ADD_EVENT,
  GET_EVENT,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from './types';

// Get posts
export const getEvents = () => async (dispatch) => {
  try {
    const res = await api.get('/events');
    dispatch({
      type: GET_EVENTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add like
export const addLike = (id) => async (dispatch) => {
  try {
    const res = await api.put(`/events/like/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Remove like
export const removeLike = (id) => async (dispatch) => {
  try {
    const res = await api.put(`/events/unlike/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete post
export const deleteEvent = (id) => async (dispatch) => {
  try {
    await api.delete(`/events/${id}`);

    dispatch({
      type: DELETE_EVENT,
      payload: id,
    });

    dispatch(setAlert('EVENT Removed', 'success'));
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add post
export const addEvent = (formData, history) => async (dispatch) => {
  try {
    const res = await api.post('/events', formData);
    if (res.data) {
      return true;
    }

    dispatch({
      type: ADD_EVENT,
      payload: res.data,
    });
    history.push('/event');
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get post
export const getEvent = (id) => async (dispatch) => {
  try {
    const res = await api.get(`/events/${id}`);

    dispatch({
      type: GET_EVENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add comment
export const addComment = (eventId, formData) => async (dispatch) => {
  try {
    const res = await api.post(`/events/comment/${eventId}`, formData);

    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });

    dispatch(setAlert('Comment Added', 'success'));
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete comment
export const deleteComment = (eventId, commentId) => async (dispatch) => {
  try {
    await api.delete(`/events/comment/${eventId}/${commentId}`);

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId,
    });

    dispatch(setAlert('Comment Removed', 'success'));
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

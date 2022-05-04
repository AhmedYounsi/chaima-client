/* eslint-disable */
import api from '../Utils/api';

export const AddTeam = async (dispatch, team) => {
  try {
    const res = await api.post('/teams', team);
    return res;
  } catch (err) {
    dispatch({
      type: 'SetAlert',
      payload: { message: 'Add team error', type: 'error' },
    });
  }
};

export const GetTeams = async (dispatch) => {
  try {
    const res = await api.get('/teams/teams');
    return res;
  } catch (err) {
    dispatch({
      type: 'SetAlert',
      payload: { message: 'cannot get teams', type: 'error' },
    });
  }
};

export const DeleteTeam = async (id) => {
  try {
    const res = await api.delete('/teams', { data: { id } });
    return res;
  } catch (err) {
    dispatch({
      type: 'SetAlert',
      payload: { message: 'delete Team error', type: 'error' },
    });
  }
};

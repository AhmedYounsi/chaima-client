import {
  GET_User,
  GET_Users,
  User_ERROR,
  CLEAR_PROFILE,
} from '../actions/types';

const initialState = {
  user: null,
  users: [],
  repos: [],
  loading: false,
  error: {},
};

function userReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_User: {
      return {
        ...state,
        user: payload,
        loading: false,
      };
    }

    case GET_Users:
      return {
        ...state,
        users: payload,
      };
    case User_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        user: null,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        user: null,
        repos: [],
      };

    default:
      return state;
  }
}

export default userReducer;

import { combineReducers } from 'redux';
import TokenReducer from './TokenReducer';
import AlertReducer from './AlertReducer';
import alert from './alert';
import auth from './auth';
import user from './user';
import event from './event';

const AllReducers = combineReducers({
  TokenReducer: TokenReducer,
  alert: alert,
  auth: auth,
  user: user,
  event: event,
  AlertReducer: AlertReducer,
});

export default AllReducers;

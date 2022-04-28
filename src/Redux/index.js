import { combineReducers } from 'redux';
import TokenReducer from './TokenReducer';
import UserReducer from './UserReducer';
import LoadingReducer from './LoadingReducer';
import AlertReducer from './AlertReducer';


const AllReducers = combineReducers({
  TokenReducer: TokenReducer,
  AlertReducer: AlertReducer,
  LoadingReducer: LoadingReducer,
  UserReducer: UserReducer,
});

export default AllReducers;

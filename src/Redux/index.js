import { combineReducers } from "redux";
import TokenReducer from "./TokenReducer";

const AllReducers = combineReducers({
  TokenReducer: TokenReducer,
});

export default AllReducers;
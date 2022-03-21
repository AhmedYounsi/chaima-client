const TokenReducer = (state = localStorage.getItem('Token'), action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      localStorage.setItem('Token', action.payload);
      return action.payload;

    case 'REMOVE_TOKEN':
      localStorage.removeItem('Token');
      return null;

    default:
      return state;
  }
};
export default TokenReducer;

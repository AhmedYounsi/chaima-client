const AlertReducer = (state = [], action) => {
  switch (action.type) {
    case 'SetAlert':
      return action.payload;
    default:
      return state;
  }
};

export default AlertReducer;

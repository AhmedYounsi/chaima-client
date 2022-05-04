const UserReducer = (
  state = JSON.parse(localStorage.getItem('User_RH') || '[]'),
  action
) => {
  switch (action.type) {
    case 'SET_USER':
      console.log(action.payload);
      localStorage.setItem('User_RH', JSON.stringify(action.payload));
      return action.payload;

    case 'REMOVE_USER':
      localStorage.removeItem('User_RH');
      return null;

    default:
      return state;
  }
};

export default UserReducer;

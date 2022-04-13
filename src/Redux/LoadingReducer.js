const LoadingReducer = (state = false, action) => {
    switch (action.type) {
      case 'SetLoading':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default LoadingReducer;
  
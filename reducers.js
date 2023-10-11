const initialState = {
    user: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN":
        return { ...state, user: action.user };
      case "LOGOUT":
        return { ...state, user: null };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  
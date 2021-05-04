export const SIGN_IN_REDUX = "SIGN_IN_REDUX";
const initialState = {
  email: "",
  password: "",
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_REDUX:
      return { ...state, ...action.data };

    default:
      return state;
  }
};

export default authReducer;

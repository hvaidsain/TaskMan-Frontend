import * as actions from "../actions/actionTypes";

const defaultState = {
  user: {
    name: "",
    email: "",
    isAdmin: false,
    _id: ""
  },
  token: ""
};

const authReducer = (state = { ...defaultState }, action) => {
  switch (action.type) {
    case actions.loginUser:
      state = {
        ...state,
        user: { ...action.payload.user },
        token: action.payload.token
      };
      return state;

    default:
      return state;
  }
};

export default authReducer;

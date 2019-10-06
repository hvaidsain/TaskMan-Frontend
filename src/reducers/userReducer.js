import * as actions from "../actions/actionTypes";

const userReducer = (state = [], action) => {
  switch (action.type) {
    case actions.fetchUsers:
      state = [...action.payload];

      return state;

    default:
      return state;
  }
};

export default userReducer;

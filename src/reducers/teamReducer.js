import * as actions from "../actions/actionTypes";

const teamReducer = (state = [], action) => {
  switch (action.type) {
    case actions.fetchTeams:
      state = [...action.payload];

      return state;

    default:
      return state;
  }
};

export default teamReducer;

import * as actions from "../actions/actionTypes";

const projectReducer = (state = [], action) => {
  switch (action.type) {
    case actions.fetchProjects:
      state = [...action.payload];

      return state;

    default:
      return state;
  }
};

export default projectReducer;

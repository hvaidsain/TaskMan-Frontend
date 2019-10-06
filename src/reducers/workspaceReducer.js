import * as actions from "../actions/actionTypes";

const workspaceReducer = (state = [], action) => {
  switch (action.type) {
    case actions.fetchWorkspaces:
      state = [...action.payload];

      return state;

    default:
      return state;
  }
};

export default workspaceReducer;

import * as actions from "./actionTypes";

import { getAllWorkspaceApi } from "../api/workspace";

export const getAllWorkspace = () => {
  return async dispatch => {
    try {
      const payload = await getAllWorkspaceApi();
      console.log(payload);
      console.log(actions.fetchWorkspaces);
      dispatch({
        type: actions.fetchWorkspaces,
        payload
      });
      return Promise.resolve();
    } catch (e) {
      console.log("Fetching workspaces failed");
      console.log(e);
    }
  };
};

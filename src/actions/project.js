import * as actions from "./actionTypes";

import { getAllProjectApi } from "../api/project";

export const getProjects = () => {
  return async dispatch => {
    try {
      const payload = await getAllProjectApi();
      console.log(payload);
      console.log(actions.fetchProjects);
      dispatch({
        type: actions.fetchProjects,
        payload
      });
      return Promise.resolve();
    } catch (e) {
      console.log("Fetching products failed");
      console.log(e);
    }
  };
};

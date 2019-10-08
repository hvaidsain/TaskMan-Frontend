import * as actions from "./actionTypes";

import { getAllTeamApi } from "../api/team";

export const getTeams = () => {
  return async dispatch => {
    try {
      const payload = await getAllTeamApi();
      console.log(payload);
      console.log(actions.fetchTeams);
      dispatch({
        type: actions.fetchTeams,
        payload
      });
      return Promise.resolve();
    } catch (e) {
      console.log("Fetching teams failed");
      console.log(e);
    }
  };
};

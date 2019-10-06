import * as actions from "./actionTypes";

import { getAllUserApi } from "../api/user";

export const getAllUsers = () => {
  return async dispatch => {
    try {
      const payload = await getAllUserApi();
      console.log(payload);
      console.log(actions.fetchUsers);
      dispatch({
        type: actions.fetchUsers,
        payload
      });
      return Promise.resolve();
    } catch (e) {
      console.log("Fetching Users failed");
      console.log(e);
    }
  };
};

import * as actions from "./actionTypes";

import { loginApi } from "../api/auth";

export const loginUser = credentials => {
  return async dispatch => {
    try {
      const payload = await loginApi(credentials);
      console.log(payload);
      console.log(actions.loginUser);
      dispatch({
        type: actions.loginUser,
        payload
      });
      return Promise.resolve();
    } catch (e) {
      console.log("Login Failed");
      console.log(e);
    }
  };
};

import { combineReducers } from "redux";

import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import workspaceReducer from "./workspaceReducer";
import userReducer from "./userReducer";
import teamReducer from "./teamReducer";

export default combineReducers({
  auth: authReducer,
  projects: projectReducer,
  workspaces: workspaceReducer,
  users: userReducer,
  teams: teamReducer
});

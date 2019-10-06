import { base_url } from "../assets/baseUrl";
import { getAuthToken } from "./storage";
import { async } from "q";

export const getAllWorkspaceApi = async () => {
  const token = getAuthToken();
  const response = await fetch(`${base_url}/admin/workspace`, {
    method: "GET",
    headers: {
      Authorization: token
    }
  });
  return response.json();
};

export const addWorkspaceApi = async workspace => {
  const token = getAuthToken();
  const response = await fetch(`${base_url}/admin/workspace`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: token
    },
    body: JSON.stringify(workspace)
  });
  return response.json();
};

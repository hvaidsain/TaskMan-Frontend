import { base_url } from "../assets/baseUrl";
import { getAuthToken } from "./storage";

export const getAllTeamApi = async () => {
  const token = getAuthToken();
  const response = await fetch(`${base_url}/admin/team`, {
    method: "GET",
    headers: {
      Authorization: token
    }
  });
  return response.json();
};

export const addTeamApi = async team => {
  const token = getAuthToken();
  const response = await fetch(`${base_url}/admin/team`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: token
    },
    body: JSON.stringify(team)
  });
  return response.json();
};

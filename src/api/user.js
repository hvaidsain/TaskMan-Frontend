import { base_url } from "../assets/baseUrl";
import { getAuthToken } from "./storage";

export const getAllUserApi = async () => {
  const token = getAuthToken();
  const response = await fetch(`${base_url}/admin/user`, {
    method: "GET",
    headers: {
      Authorization: token
    }
  });
  return response.json();
};

export const addUserApi = async user => {
  const token = getAuthToken();
  const response = await fetch(`${base_url}/admin/users`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: token
    },
    body: JSON.stringify(user)
  });
  return response.json();
};

export const getUsersOfTeam = async id => {
  const token = getAuthToken();
  const response = await fetch(`${base_url}/admin/team/users/${id}`, {
    method: "GET",
    headers: {
      Authorization: token
    }
  });
  return response.json();
};

export const getEndUserTasksApi = async id => {
  const token = getAuthToken();
  const response = await fetch(`${base_url}/users/task/${id}`, {
    method: "GET",
    headers: {
      Authorization: token
    }
  });
  return response.json();
};
//End uses : set flag to completed

export const updateTaskApi = async (flag, id) => {
  const token = getAuthToken();
  const response = await fetch(`${base_url}/users/task/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      Authorization: token
    },
    body: JSON.stringify(flag)
  });
  return response.json();
};

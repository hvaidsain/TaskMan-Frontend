import { base_url } from "../assets/baseUrl";
import { getAuthToken } from "./storage";

export const getAllTaskApi = async () => {
  const token = getAuthToken();
  const response = await fetch(`${base_url}/admin/task`, {
    method: "GET",
    headers: {
      Authorization: token
    }
  });
  return response.json();
};

export const getTaskByProjectApi = async id => {
  const token = getAuthToken();
  const response = await fetch(`${base_url}/admin/project/task/${id}`, {
    method: "GET",
    headers: {
      Authorization: token
    }
  });
  return response.json();
};

export const addTaskApi = async task => {
  const token = getAuthToken();
  const response = await fetch(`${base_url}/admin/task`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: token
    },
    body: JSON.stringify(task)
  });
  return response.json();
};

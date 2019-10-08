import { base_url } from "../assets/baseUrl";
import { getAuthToken } from "./storage";

export const getAllProjectApi = async () => {
  const token = getAuthToken();

  const response = await fetch(`${base_url}/admin/project`, {
    method: "GET",
    headers: {
      Authorization: token
    }
  });
  return response.json();
};

export const addProjectApi = async project => {
  const token = getAuthToken();
  const response = await fetch(`${base_url}/admin/project`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: token
    },
    body: JSON.stringify(project)
  });
  return response.json();
};

export const getProjectByWorkspaceApi = async id => {
  const token = getAuthToken();

  const response = await fetch(`${base_url}/admin/workspace/projects/${id}`, {
    method: "GET",
    headers: {
      Authorization: token
    }
  });
  return response.json();
};

import { base_url } from "../assets/baseUrl";
import { getAuthToken } from "./storage";


export const getAllTaskApi = async  => {
  const token = getAuthToken();
  const response = await fetch(`${base_url}/admin/task`, {
    method: "GET",
    headers: {
      Authorization: token
    }
  });
  return response.json();
};

export const getTaskByProjectApi = async(id) => {
  const token = getAuthToken();
  const response = await fetch(`${base_url}/admin/task/${id}`, {
    method: "GET",
    headers: {
      Authorization: token
    }
  });
  return response.json();
};

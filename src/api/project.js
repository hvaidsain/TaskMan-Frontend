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

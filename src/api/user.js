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

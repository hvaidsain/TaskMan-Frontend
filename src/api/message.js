import { base_url } from "../assets/baseUrl";
import { getAuthToken } from "./storage";

export const addMessageApi = async (message, id) => {
  const token = getAuthToken();
  const response = await fetch(`${base_url}/admin/message/${id}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: token
    },
    body: JSON.stringify(message)
  });
  return response.json();
};

export const getMessageApi = async id => {
  const token = getAuthToken();
  const response = await fetch(`${base_url}/users/message/${id}`, {
    //id :teamdId
    method: "GET",
    headers: {
      Authorization: token
    }
  });
  return response.json();
};

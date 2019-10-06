import axios from "axios";
//base_url = http://192.168.0.139:4000
import { base_url } from "../assets/baseUrl";

export const loginApi = async credentials => {
  const response = await fetch(`${base_url}/admin/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(credentials)
  });

  return response.json();
};

// export const login = async credentials => {
//   const URL = `${base_url}/admin/login`;
//   console.log("IN Login API");
//   console.log(URL);
//   console.log(credentials);

//   const respose = await axios.post(URL, credentials);
//   console.log(respose.data);
//   return respose.data;
// };

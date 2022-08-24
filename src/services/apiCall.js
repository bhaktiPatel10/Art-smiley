import axios from "axios";
import { toast } from "react-toastify";
import { backendUrl } from "../constant/BasUrl";

const sendRequest = async ({ url, method }, data = null) => {
  let apiurl = backendUrl + url;
  let token = localStorage.getItem("auth-token")
    ? localStorage.getItem("auth-token")
    : "";
  try {
    const response = await axios({
      url: apiurl,
      method,
      data,
      headers: {
        AUthorization: `Bearer ` + token,
      },
    });
    return response.data;
  } catch (error) {
    toast.error(error.response.status + error.response.statusText);
    return { error: error.response.data };
  }
};

export { sendRequest };

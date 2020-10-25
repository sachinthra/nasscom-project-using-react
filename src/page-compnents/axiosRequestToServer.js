import axios from "axios";
import cookie from "react-cookies";
axios.defaults.baseURL = "http://584a801028de.ngrok.io/";

export function AxiosRequestToServer(link, data) {
  const config = {
    headers: { Authorization: `Bearer ${cookie.load("userToken")}` },
  };
  async function requestServer() {
    return await axios.post(link, data, config);
  }
  // console.log("props.link, props.data : ", props.link, props.data);
  return requestServer();
}

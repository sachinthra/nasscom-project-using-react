import axios from "axios";

export function SendDataToServer(link, data) {
  async function requestServer() {
    axios.defaults.baseURL = "http://584a801028de.ngrok.io/";
    return await axios.post(link, data);
  }
  // console.log("props.link, props.data : ", props.link, props.data);
  return requestServer();
}

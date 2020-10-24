import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001/api/";

export function SendDataToServer(props) {
  async function requestServer() {
    return await axios.post(props.link, props.data);
  }
  // console.log("props.link, props.data : ", props.link, props.data);
  return requestServer();
}

import Axios from "axios";

const backendBaseUrl = process.env.VUE_APP_BACKEND_BASE_URL;

const axios = Axios.create({
  baseURL: backendBaseUrl,
});

export default axios;

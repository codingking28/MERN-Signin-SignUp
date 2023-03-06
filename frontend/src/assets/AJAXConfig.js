import axios from "axios";
export const config = {
  headers: {
    "content-type": "multipart/form-data",
  },
};

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

API.interceptors.request.use(
  (config) => {
    // Insert authorization token on request call
    // config.headers["Authorization"] = `Bearer ${localStorage.getItem(
    //   "access_token"
    // )}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default API;

import axios, { AxiosError, AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  timeout: 10000,
  headers: {
  }
});

instance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
      }
    }
    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

export default instance;
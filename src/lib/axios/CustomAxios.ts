import axios, { AxiosError, AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  timeout: 10000,
});

instance.interceptors.request.use(
  async function (config) {
    const access_token = localStorage.getItem('access_token');
    access_token ? config.headers = {
      Authorization: `Bearer ${access_token}`,
    } : null;
    return config;
  },
  function (err: AxiosError) {
    return Promise.reject(err)
  }
)

export default instance;
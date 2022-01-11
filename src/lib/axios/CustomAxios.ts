import axios, { AxiosInstance } from 'axios';

export const customAxios: AxiosInstance = axios.create({
  baseURL: `server`, // 기본 서버 주소 입력
  headers: {
    access_token:'Token',
  },
});

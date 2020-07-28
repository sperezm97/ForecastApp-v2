import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5,
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.url = config.url += "&appid=77aade2d2d68032076448a1e5b8367a1"
    return config
  },
  (error: AxiosError) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => Promise.reject(error),
);

export default instance;

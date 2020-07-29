import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { WEATHER_TOKEN_API } from 'react-native-dotenv';

const instance = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5',
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const newConfig = { ...config };
    newConfig.url += `&appid=${WEATHER_TOKEN_API}`;
    return newConfig;
  },
  (error: AxiosError) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => Promise.reject(error),
);

export default instance;

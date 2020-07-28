import React from 'react';
import { AxiosResponse } from 'axios';
import api from '../api';
import { ICity } from '../types/City';

interface ContextCity {
  getWeatherBtCity: (cityName: string) => Promise<ICity>;
}
const City = React.createContext<ContextCity | null>(null);

const getWeatherBtCity = async (cityName: string): Promise<ICity> => {
  const response: AxiosResponse<ICity> = await api.get(`/weather?q=${cityName}`);
  return response.data;
};

export function CityProvider({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <City.Provider
      value={{
        getWeatherBtCity,
      }}
    >
      {children}
    </City.Provider>
  );
}

export default function useWeatherByCity() {
  return React.useContext(City);
}

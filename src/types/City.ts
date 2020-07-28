/* eslint-disable camelcase */
export type coord = {
  lon: number;
  lat: number;
};

export type weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};
export type main = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};

export type wind = {
  speed: number;
  deg: number;
};

export type sys = {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
};

export interface ICity {
  coord: coord;
  weather: weather[];
  base: string;
  main: main;
  visibility: number;
  wind: wind;
  clouds: {
    all: number;
  };
  dt: number;
  sys: sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

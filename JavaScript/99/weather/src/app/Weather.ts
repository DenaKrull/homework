export interface Weather {
  place: string;
  icon: string;
  details: string;
}

export interface WeatherServerResponse {
  name: string;
  weather: { icon: string, description: string }[];
  main: { temp: number };
}
import {Country} from "./country";

export interface City {
  id: number;
  name: string;
  area: number;
  population: string;
  gdp: number;
  description: string;
  country: Country;
}

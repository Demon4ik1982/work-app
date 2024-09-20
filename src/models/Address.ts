import { Geo } from "./Geo";

export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export type Address = IAddress;

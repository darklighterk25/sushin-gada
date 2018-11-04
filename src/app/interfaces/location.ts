import { Schedule } from './schedule';
import { Address } from './address';

export interface Location {
  name: string;
  address: Address;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  schedule: Schedule[];
}

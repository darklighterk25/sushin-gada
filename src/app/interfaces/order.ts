import { Item } from './item';

export interface Order {
  id: string;
  date: Date;
  items: Item[];
  total: number;
}

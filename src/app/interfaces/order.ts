import { Item } from './item';

export interface Order {
  id: string;
  closed: boolean;
  delivered: boolean;
  date: Date;
  discount: number;
  taxes: number;
  total: number;
  items: Item[];
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API} from '../../classes/api';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor( private _httpClient: HttpClient ) {
  }
  getCart() {
    return this._httpClient.get( API.ENDPOINT + '/account/cart' );
  }
  getOrders() {
    return this._httpClient.get( API.ENDPOINT + '/account/orders' );
  }
}

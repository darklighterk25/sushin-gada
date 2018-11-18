import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API} from '../../classes/api';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor( private _httpClient: HttpClient ) {
  }
  getCart(): Observable<Object> {
    return this._httpClient.get( API.ENDPOINT + '/account/cart', API.GET_OPTIONS);
  }
  getOrders(): Observable<Object> {
    return this._httpClient.get( API.ENDPOINT + '/account/orders' );
  }
}

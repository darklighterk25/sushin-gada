import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API} from '../../classes/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor( private _httpClient: HttpClient ) {
  }
  addToCart( body: Object ): Observable<Object> {
    return this._httpClient.put( API.ENDPOINT + '/account/cart/add-item',  body, API.OPTIONS );
  }
  deleteCart(): Observable<Object> {
    return this._httpClient.delete( API.ENDPOINT + '/account/cart/delete', API.OPTIONS );
  }
  getCart(): Observable<Object> {
    return this._httpClient.get( API.ENDPOINT + '/account/cart', API.OPTIONS );
  }
  getOrders(): Observable<Object> {
    return this._httpClient.get( API.ENDPOINT + '/account/orders', API.OPTIONS );
  }
  purchase( body: Object ): Observable<Object> {
    return this._httpClient.put( API.ENDPOINT + '/account/orders/purchase', body, API.OPTIONS );
  }
}

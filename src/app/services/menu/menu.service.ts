import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../../interfaces/item';
import { API } from '../../classes/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor( private _httpClient: HttpClient ) { }

  getMenu(): Observable<Object> {
    return this._httpClient.get( API.ENDPOINT + '/menu' );
  }

  addToCart( body: Item ): Observable<Object> {
    return this._httpClient.put( API.ENDPOINT + '/menu/addToCart', body, API.OPTIONS );
  }

}

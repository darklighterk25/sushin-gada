import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../../classes/api';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor( private _httpClient: HttpClient ) {
  }
  getMenu() {
    return this._httpClient.get( API.ENDPOINT + '/menu' );
  }
}

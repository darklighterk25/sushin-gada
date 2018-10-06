import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../../classes/api';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor( private _httpClient: HttpClient ) {
  }
  getRestaurants() {
    return this._httpClient.get( API.ENDPOINT + '/locations' );
  }
}

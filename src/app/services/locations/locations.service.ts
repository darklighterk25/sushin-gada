import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../../classes/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor( private _httpClient: HttpClient ) {
  }
  getLocations(): Observable<Object> {
    return this._httpClient.get( API.ENDPOINT + '/locations' );
  }
}

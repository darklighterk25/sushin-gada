import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../../classes/api';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor( private _httpClient: HttpClient ) {
  }
  public getAccount() {
    return this._httpClient.get( API.ENDPOINT + '/account' );
  }
  public login( email: string, password: string ) {
    const headers = new HttpHeaders({
      'email': `${email}`,
      'password': `${password}`
    });
    return this._httpClient.post( API.ENDPOINT + '/account/login', null, { headers } );
  }
}

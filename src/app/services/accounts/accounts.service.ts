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
    return this._httpClient.get( API.ENDPOINT + '/account', {withCredentials: true} );
  }
  public login( email: string, password: string ) {
    const loginHeaders = new HttpHeaders({
      'email': `${email}`,
      'password': `${password}`
    });
    const httpOptions = {
      headers: loginHeaders,
      withCredentials: true
    };
    return this._httpClient.post( API.ENDPOINT + '/account/login', null, httpOptions);
  }
}

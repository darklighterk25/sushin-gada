import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../../interfaces/account';
import { Address } from '../../interfaces/address';
import { API } from '../../classes/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor( private _httpClient: HttpClient ) {
  }
  public delete(): Observable<Object> {
    return this._httpClient.put( API.ENDPOINT + '/account/delete', {  }, API.OPTIONS );
  }
  public getAccount(): Observable<Object> {
    return this._httpClient.get( API.ENDPOINT + '/account', API.OPTIONS );
  }
  getBillingAddress(): Observable<Object> {
    return this._httpClient.get( API.ENDPOINT + '/account/get-billing-address', API.OPTIONS );
  }
  public login( body ): Observable<Object> {
    return this._httpClient.post( API.ENDPOINT + '/account/login', body, API.OPTIONS );
  }
  public logout(): Observable<Object> {
    return this._httpClient.get( API.ENDPOINT + '/account/logout', API.OPTIONS );
  }
  public logged(): Observable<Object> {
    return this._httpClient.get( API.ENDPOINT + '/account/logged', API.OPTIONS );
  }
  public setBillingAddress( body: Address ): Observable<Object> {
    return this._httpClient.put( API.ENDPOINT + '/account/set-billing-address', body, API.OPTIONS );
  }
  public signup( body: Account ): Observable<Object> {
    return this._httpClient.put( API.ENDPOINT + '/account/signup', body, API.OPTIONS );
  }
  public update( body: Object ): Observable<Object> {
    return this._httpClient.put( API.ENDPOINT + '/account/update', body, API.OPTIONS );
  }
}

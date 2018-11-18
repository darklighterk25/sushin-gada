import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../../interfaces/account';
import { API } from '../../classes/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor( private _httpClient: HttpClient ) {
  }
  public getAccount(): Observable<Object> {
    return this._httpClient.get( API.ENDPOINT + '/account', API.GET_OPTIONS );
  }
  public login( body ): Observable<Object> {
    return this._httpClient.post( API.ENDPOINT + '/account/login', body, API.POST_OPTIONS );
  }
  public logout(): Observable<Object> {
    return this._httpClient.get( API.ENDPOINT + '/account/logout', API.GET_OPTIONS );
  }
  public logged(): Observable<Object> {
    return this._httpClient.get( API.ENDPOINT + '/account/logged', API.GET_OPTIONS)
  }
  public signup( body: Account ): Observable<Object> {
    return this._httpClient.put( API.ENDPOINT + '/account/signup', body, API.POST_OPTIONS );
  }
}

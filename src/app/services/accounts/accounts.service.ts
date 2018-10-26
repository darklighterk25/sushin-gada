import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../../classes/api';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor( private _httpClient: HttpClient ) {
  }
  public getAccount() {
    return this._httpClient.get( API.ENDPOINT + '/account', API.GET_OPTIONS );
  }
  public login( body ) {
    return this._httpClient.post( API.ENDPOINT + '/account/login', body, API.POST_OPTIONS );
  }
  public logout(){
    return this._httpClient.get( API.ENDPOINT + '/account/logout', API.GET_OPTIONS );
  }
  public logged(){
    return this._httpClient.get( API.ENDPOINT + '/account/logged', API.GET_OPTIONS)
  }
}

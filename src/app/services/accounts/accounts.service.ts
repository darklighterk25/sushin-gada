import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API} from '../../classes/api';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor( private _httpClient: HttpClient ) {
  }
  getAccount() {
    return this._httpClient.get( API.ENDPOINT + '/account' );
  }
}

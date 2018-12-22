import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../../classes/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor( private _httpClient: HttpClient ) { }

  salesByBranch(): Observable<Object> {
    return this._httpClient.get( API.ENDPOINT + '/reports/sales-by-branch', API.OPTIONS );
  }
  topSales(): Observable<Object> {
    return this._httpClient.get( API.ENDPOINT + '/reports/top-sales', API.OPTIONS );
  }
  topOrders(): Observable<Object> {
    return this._httpClient.get( API.ENDPOINT + '/reports/top-orders', API.OPTIONS );
  }
  topSpender(): Observable<Object> {
    return this._httpClient.get( API.ENDPOINT + '/reports/top-money-spent', API.OPTIONS );
  }
  mostSold(): Observable<Object> {
    return this._httpClient.get( API.ENDPOINT + '/reports/most-sold', API.OPTIONS );
  }
  productSales(): Observable<Object> {
    return this._httpClient.get( API.ENDPOINT + '/reports/product-sales', API.OPTIONS );
  }
  salesByType(): Observable<Object> {
    return this._httpClient.get( API.ENDPOINT + '/reports/sales-by-type', API.OPTIONS );
  }
  genderParity(): Observable<Object> {
    return this._httpClient.get( API.ENDPOINT + '/reports/gender-quantity', API.OPTIONS );
  }
  salesPerEmployee(): Observable<Object> {
    return this._httpClient.get( API.ENDPOINT + '/reports/sales-per-employee', API.OPTIONS );
  }
}

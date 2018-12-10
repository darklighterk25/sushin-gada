import { HttpHeaders } from '@angular/common/http';

export class API {
  public static ENDPOINT = 'http://localhost:8000';
  public static OPTIONS = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true
  };
}

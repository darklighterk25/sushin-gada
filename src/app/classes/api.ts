import { HttpHeaders } from '@angular/common/http';

export class API {
  public static ENDPOINT = 'http://192.168.43.189:8000';
  public static OPTIONS = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true
  };
}

import { HttpHeaders } from "@angular/common/http";

export class API {
  public static ENDPOINT = 'http://localhost:8000';
  public static GET_OPTIONS = {
    withCredentials: true
  };
  public static POST_OPTIONS = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true
  };
}

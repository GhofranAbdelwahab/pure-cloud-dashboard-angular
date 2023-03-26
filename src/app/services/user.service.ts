import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpHeaders, HttpResponse, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { RegisterRequest } from '../models/register.model';
import { TokenModel } from '../models/token.model';
import { Shared } from '../models/shared.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private BASE_URL = 'http://localhost:1234';
  public LOGIN_ACCOUNT_URL = `${this.BASE_URL}/api/login`;


  constructor(private http: HttpClient, private shared: Shared) {

  }

  login(client_id: string, client_secret: string): Observable<TokenModel> {
    this.shared.basic = btoa(client_id + ':' + client_secret);
    const headerJson = {
      'Authorization': 'Basic ' + this.shared.basic,
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    const headers = {headers: new HttpHeaders(headerJson)};
    const body = {params: new HttpParams().append('grant_type', 'client_credentials')};
    return this.http.post<TokenModel>(this.LOGIN_ACCOUNT_URL, body, headers);
  }
}

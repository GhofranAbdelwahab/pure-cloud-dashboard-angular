import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpHeaders, HttpResponse, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DashboardResponse} from "../models/dashboard.model";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private BASE_URL = 'http://localhost:1234';
  public DASHBOARD_URL = `${this.BASE_URL}/api/dashboard`;


  constructor(private http: HttpClient) {

  }

  loadDashboard(): Observable<DashboardResponse[]> {
    const headerJson = {
      'Content-Type': 'application/json'
    };
    const headers = {headers: new HttpHeaders(headerJson)};
    return this.http.post<DashboardResponse[]>(this.DASHBOARD_URL, headers);
  }
}

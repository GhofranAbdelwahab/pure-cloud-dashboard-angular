import {Injectable} from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpResponse } from '@angular/common/http'; import {Observable} from 'rxjs';
import { Table } from 'src/app/models/tables.model';
import { TableRequest } from 'src/app/models/tablesRequest.model';
import { Shared } from '../models/shared.model';
import { DateRequest } from '../models/dateRequest.model';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private BASE_URL = 'http://localhost:12345';
  public GET_ALL_TABLES = `${this.BASE_URL}/tables`;
  public ADD_NEW_TABELS = `${this.BASE_URL}/tables`;
  public GET_AVAILABLE_TABLES = `${this.BASE_URL}/reservation-available-tables`;

  constructor(private http: HttpClient, private shared: Shared) {

  }

  getAllTables(): Observable<Table[]> {
    const headerJson = {
      'Authorization': 'Basic ' + this.shared.basic
    };
    const requestHeader = {headers: new HttpHeaders(headerJson)};
    return this.http.get<Table[]>(this.GET_ALL_TABLES, requestHeader);
  }

  addNewTable(data: TableRequest): Observable<any> {
    const headerJson = {
        'Authorization': 'Basic ' + this.shared.basic
      };
    const requestHeader = {headers: new HttpHeaders(headerJson)};
    return this.http.post<any>(this.ADD_NEW_TABELS, data, requestHeader);
  }

  getAvailableTables(data: DateRequest): Observable<Table[]> {
    const headerJson = {
        'Authorization': 'Basic ' + this.shared.basic
      };
    const requestHeader = {headers: new HttpHeaders(headerJson)};
    return this.http.post<Table[]>(this.GET_AVAILABLE_TABLES, data, requestHeader);
  }
}

import {Injectable} from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpResponse } from '@angular/common/http';
import {Observable} from 'rxjs';
import { RegisterRequest } from '../models/register.model';
import { TokenModel } from '../models/token.model';
import { Shared } from '../models/shared.model';
import { ReserveRequestModel } from '../models/reserveRequest.model';
import { DateRequest } from '../models/dateRequest.model';
import { ReservationModel } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private BASE_URL = 'http://localhost:12345';
  public RESERVATION_ACCOUNT_URL = `${this.BASE_URL}/reservation-by-datetime`;
  public RESERVATION_BY_DATE_URL = `${this.BASE_URL}/reservation-by-date`;



  constructor(private http: HttpClient, private shared: Shared) {

  }


  reserve_by_datetime(data: ReserveRequestModel): Observable<any> {
    const headerJson = {
        'Authorization': 'Basic ' + this.shared.basic
      };
    const requestHeader = {headers: new HttpHeaders(headerJson)};
    return this.http.post<any>(this.RESERVATION_ACCOUNT_URL, data, requestHeader);
  }

  reserve_by_date(data: DateRequest): Observable<ReservationModel[]> {
    const headerJson = {
        'Authorization': 'Basic ' + this.shared.basic
    };
    const requestHeader = {headers: new HttpHeaders(headerJson)};
    return this.http.post<ReservationModel[]>(this.RESERVATION_BY_DATE_URL, data, requestHeader);
  }
}


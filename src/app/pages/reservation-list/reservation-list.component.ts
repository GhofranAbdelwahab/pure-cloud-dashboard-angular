import { Component, OnInit, OnChanges } from '@angular/core';
import { Table } from 'src/app/models/tables.model';
import { ReservationService } from 'src/app/services/reservation.service';
import { Shared } from '../../models/shared.model';
import { Router } from '@angular/router';
import { ReservationModel } from 'src/app/models/reservation.model';
import { DateRequest } from 'src/app/models/dateRequest.model';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent implements OnInit, OnChanges {

  reservationDate: string;
  private tableList: ReservationModel[] = [];

  constructor(private router: Router, private reservationService: ReservationService, private shared: Shared) {

  }

  ngOnInit() {
    this.accountType();
  }
  ngOnChanges() {
    this.accountType();
  }

  public getTableList(): ReservationModel[] {
    return this.tableList;
  }
  public getTableItem(idx: number): ReservationModel {
    return this.tableList[idx];
  }

  public onSearchClick() {
    this.tableList = [];
    const data =  new DateRequest(this.reservationDate);
    this.reservationService.reserve_by_date(data).subscribe(
      res => {
        this.tableList = res;
        this.ngOnInit();

      },
      err => {
        this.tableList = [];
        this.ngOnInit();
      }
    );
    }


  public accountType() {
    if (this.shared.user.token_type.indexOf('bearer') >= 0) {
      this.shared.isAdmin = true;
    } else {
      this.shared.isAdmin = false;
    }
  }
}



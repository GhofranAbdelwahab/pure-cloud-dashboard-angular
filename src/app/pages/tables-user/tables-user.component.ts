import { Component, OnInit, OnChanges } from '@angular/core';
import { Table } from 'src/app/models/tables.model';
import { TableService } from 'src/app/services/table.service';
import { Shared } from '../../models/shared.model';
import { Router } from '@angular/router';
import { DateRequest } from 'src/app/models/dateRequest.model';

@Component({
  selector: 'app-tables-user',
  templateUrl: './tables-user.component.html',
  styleUrls: ['./tables-user.component.scss']
})
export class TablesUserComponent implements OnInit, OnChanges {

  private tableList: Table[] = [];
  private reservationDate: string;

  constructor(private router: Router, private tableServices: TableService, private shared: Shared) {

  }

  ngOnInit() {
    this.accountType();
  }
  ngOnChanges() {
    this.accountType();
  }
  public getTableList(): Table[] {
    return this.tableList;
  }
  public getTableItem(idx: number): Table {
    return this.tableList[idx];
  }

  public onSearch() {
    this.tableList = [];
    const data =  new DateRequest(this.reservationDate);
    this.tableServices.getAvailableTables(data).subscribe(
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
      this.shared.isAdmin = true;
  }

    // this.router.navigateByUrl('/tables', { skipLocationChange: true }).then(() => {
    //   this.router.navigate(['TablesComponent']);
}



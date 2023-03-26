import { Component, OnInit, OnChanges } from '@angular/core';
import { Table } from 'src/app/models/tables.model';
import { TableRequest } from 'src/app/models/tablesRequest.model';
import { TableService } from 'src/app/services/table.service';
import { Shared } from '../../models/shared.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit, OnChanges {

  private tableList: Table[] = [];
  private isAdmin = false;
  private size = -1;

  constructor(private router: Router, private tableServices: TableService, private shared: Shared) {

  }

  ngOnInit() {
    this.accountType();
    this.getAllTables();
  }
  ngOnChanges() {
    this.accountType();
    this.getAllTables();
  }

  public getAllTables() {
    this.tableServices.getAllTables().subscribe(
      res => {
        this.tableList = res;
      },
      err => {
        alert('An error has occurred;');
      }
    );
  }

  public getTableList(): Table[] {
    return this.tableList;
  }
  public getTableItem(idx: number): Table {
    return this.tableList[idx];
  }

  public accountType() {
    if (this.shared.user.token_type.indexOf('bearer') >= 0) {
      this.shared.isAdmin = true;
    } else {
      this.shared.isAdmin = false;
    }
  }

  public addNewTable() {
    if (this.size > 0) {
      const data =  new TableRequest(this.size, true);
    this.tableServices.addNewTable(data).subscribe(
      res => {
        alert('Table Added Done Successfully');
        this.ngOnInit();
      },
      err => {
        alert('An error has occurred');
        this.ngOnInit();
      }
    );

    }
  }
}



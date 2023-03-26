import { Component, OnInit, OnDestroy } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Router } from '@angular/router';
import {DashboardResponse} from "../../models/dashboard.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private dashboard: DashboardResponse[];

  constructor(private router: Router, private userServices: DashboardService) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  public onLogin() {
    this.userServices.loadDashboard().subscribe(
      res => {
        this.dashboard = res;
        this.dashboard.forEach((item)=>{
          console.log(item.metric);
          console.log(item.stats.min);
          console.log(item.stats.max);
          console.log(item.stats.count);
          console.log(item.stats.sum);
        })
      },
      err => {
        alert('Loading Dashboard Failed');
      }
    );
  }
}

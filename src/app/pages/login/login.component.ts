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
  private dashboard: DashboardResponse[] = [];

  constructor(private router: Router, private userServices: DashboardService) {}

  ngOnInit() {
    this.onLogin();
  }
  ngOnDestroy() {
  }

  public onLogin() {
    this.userServices.loadDashboard().subscribe(
      res => {
        this.dashboard = res;
      },
      err => {
        alert('Loading Dashboard Failed');
      }
    );
  }
}

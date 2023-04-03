import { Component, OnInit } from '@angular/core';
import {DashboardResponse} from "../../models/dashboard.model";
import {Router} from "@angular/router";
import {DashboardService} from "../../services/dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private dashboard: DashboardResponse[] = [];

  constructor(private userServices: DashboardService) {}

  ngOnInit() {
    setInterval(() => {
      this.loadDashboard();
    }, 5000);
  }
  ngOnDestroy() {
  }

  public loadDashboard() {
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

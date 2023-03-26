import { Component, OnInit, OnDestroy } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Router } from '@angular/router';
import { Shared } from '../../models/shared.model';
import {ErrorModel} from '../../models/error.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private client_id: string;
  private client_secret: string;
  private error: ErrorModel;

  constructor(private router: Router, private userServices: DashboardService, private shared: Shared) {}

  ngOnInit() {
    this.shared.basic = '';
    this.shared.dashboard  = null;
  }
  ngOnDestroy() {
  }

  public onLogin() {
    this.userServices.loadDashboard().subscribe(
      res => {
        this.shared.dashboard = res;
        console.log(this.shared.dashboard.toString());
        alert('Login Success');
        this.router.navigate(['/user-profile']);
      },
      err => {
        this.error = err;
        alert('Login Failed');
      }
    );

  }
}

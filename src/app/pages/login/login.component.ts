import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
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

  constructor(private router: Router, private userServices: UserService, private shared: Shared) {}

  ngOnInit() {
    this.shared.basic = '';
    this.shared.user  = null;
  }
  ngOnDestroy() {
  }

  public onLogin() {
    this.userServices.login(this.client_id, this.client_secret).subscribe(
      res => {
        this.shared.user = res;
        console.log(this.shared.user.access_token.toString());
        this.shared.User_LoggedIN = true;
        alert('Login Success');
        this.router.navigate(['/user-profile']);
      },
      err => {
        this.error = err;
        console.log(this.error.toString());
        console.log(this.error.error_description);
      }
    );

  }
}

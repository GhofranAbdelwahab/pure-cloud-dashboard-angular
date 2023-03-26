import { Component, OnInit } from '@angular/core';
import { RegisterRequest } from 'src/app/models/register.model';
import { UserService } from 'src/app/services/user.service';
import { TokenModel } from 'src/app/models/token.model';
import { Router } from '@angular/router';
import { Shared } from 'src/app/models/shared.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private name: string;
  private mobile: string;
  private email: string;
  private password: string;
  private user: TokenModel;

  constructor(private router: Router, private userServices: UserService, private shared: Shared) { }

  ngOnInit() {
  }

  public onCreateAccount() {
    const account = new RegisterRequest(this.password, this.name, this.email, this.mobile);
  }


}

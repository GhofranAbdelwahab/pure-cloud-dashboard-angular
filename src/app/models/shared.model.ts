import { TokenModel } from 'src/app/models/token.model';
import {Injectable} from '@angular/core';
import {DashboardResponse} from "./dashboard.model";

@Injectable({
    providedIn: 'root'
  })

export class Shared {
    basic: String;
    dashboard: DashboardResponse;
    isAdmin = false;
    User_LoggedIN = false;
}

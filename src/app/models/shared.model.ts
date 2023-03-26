import { TokenModel } from 'src/app/models/token.model';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class Shared {
    basic: String;
    user: TokenModel;
    isAdmin = false;
    User_LoggedIN = false;
}

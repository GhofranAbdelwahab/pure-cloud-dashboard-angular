import { Component, OnInit, OnChanges, OnDestroy} from '@angular/core';
import { Shared } from '../../models/shared.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnChanges {

  private accountUsername = '';
  private accountEmail = '';
  private accountMobile = '';

  constructor(private shared: Shared) {
   }

  ngOnInit() {
    this.updateProfile();
  }
  ngOnChanges() {
    this.updateProfile();
  }

  public updateProfile() {

  }

}

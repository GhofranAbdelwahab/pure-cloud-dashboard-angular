import { Component, OnInit, ElementRef } from '@angular/core';
import { ADMIN_ROUTES } from '../sidebar/sidebar.component';
import { USER_ROUTES } from '../sidebar/sidebar.component';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { Shared } from '../../models/shared.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private accountUserName = 'My Account';
  public focus;
  public listTitles: any[];
  public location: Location;
  constructor(location: Location, private element: ElementRef, private router: Router,
              private userServices: DashboardService, private shared: Shared) {
    this.location = location;
  }

  ngOnInit() {
    if (this.shared.isAdmin) {
      this.listTitles = ADMIN_ROUTES.filter(listTitle => listTitle);
    } else {
      this.listTitles = USER_ROUTES.filter(listTitle => listTitle);
    }

  }
  getTitle() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
        titlee = titlee.slice( 1 );
    }

    for (let item = 0; item < this.listTitles.length; item++) {
        if (this.listTitles[item].path === titlee) {
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }

  public onLogout() {
    this.shared.basic = '';
    this.shared.isAdmin = false;
  }

}

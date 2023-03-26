import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shared } from '../../models/shared.model';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ADMIN_ROUTES: RouteInfo[] = [
    { path: '/reservation', title: 'Reservation',  icon: 'ni-pin-3 text-orange', class: '' },
    { path: '/user-profile', title: 'User profile',  icon: 'ni-single-02 text-yellow', class: '' },
    { path: '/reservation-list', title: 'Reservation List',  icon: 'ni-bullet-list-67 text-red', class: '' },
    { path: '/tables', title: 'Tables',  icon: 'ni-bullet-list-67 text-red', class: '' },
    { path: '/tables-user', title: 'Available Tables',  icon: 'ni-bullet-list-67 text-red', class: '' },
];
export const USER_ROUTES: RouteInfo[] = [
  { path: '/reservation', title: 'Reservation',  icon: 'ni-pin-3 text-orange', class: '' },
  { path: '/user-profile', title: 'User profile',  icon: 'ni-single-02 text-yellow', class: '' },
  { path: '/tables-user', title: 'Available Tables',  icon: 'ni-bullet-list-67 text-red', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router, private shared: Shared) { }

  ngOnInit() {
    if (this.shared.isAdmin === true) {
          this.menuItems = ADMIN_ROUTES.filter(menuItem => menuItem);
        this.router.events.subscribe((event) => {
          this.isCollapsed = true;
      });
    } else {
      this.menuItems = USER_ROUTES.filter(menuItem => menuItem);
        this.router.events.subscribe((event) => {
          this.isCollapsed = true;
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {}
}

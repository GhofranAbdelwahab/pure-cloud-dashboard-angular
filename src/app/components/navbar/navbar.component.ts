import { Component, OnInit, ElementRef } from '@angular/core';
import { ADMIN_ROUTES } from '../sidebar/sidebar.component';
import { USER_ROUTES } from '../sidebar/sidebar.component';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor() {

  }

  ngOnInit() {
  }
}

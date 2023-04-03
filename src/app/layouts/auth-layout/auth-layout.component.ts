import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit, OnDestroy {
  constructor(private router: Router) { }

  ngOnInit() {
    const html = document.getElementsByTagName('html')[0];
    html.classList.add('auth-layout');
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('bg-dark');
    body.classList.add('fontawesome-i2svg-active');
    body.classList.add('fontawesome-i2svg-complete');
  }

  ngOnDestroy() {
    const html = document.getElementsByTagName('html')[0];
    html.classList.remove('auth-layout');
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('bg-default');
  }
}

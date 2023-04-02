import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';

import {DashboardComponent} from '../../pages/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
  ],
  declarations: [
    DashboardComponent
  ]
})
export class AuthLayoutModule { }

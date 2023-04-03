import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BarchartComponent } from './barchart/barchart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LinechartComponent } from './linechart/linechart.component';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { BubbleComponent } from './bubble/bubble.component';
import { PolarareaComponent } from './polararea/polararea.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    NavbarComponent,
    BarchartComponent,
    DashboardComponent,
    LinechartComponent,
    DoughnutComponent,
    BubbleComponent,
    PolarareaComponent
  ],
  exports: [
    NavbarComponent,
    BarchartComponent,
    DashboardComponent,
    LinechartComponent,
    DoughnutComponent,
    BubbleComponent,
    PolarareaComponent
  ]
})
export class ComponentsModule { }

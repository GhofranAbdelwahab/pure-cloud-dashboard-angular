import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit, OnDestroy {
  test: Date = new Date();
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    const html = document.getElementsByTagName('html')[0];
    html.classList.add('auth-layout');
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('bg-dark');
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
 this.BarChart();
 this.LineChart();
 this.DoughnutChart();
  }
  ngOnDestroy() {
    const html = document.getElementsByTagName('html')[0];
    html.classList.remove('auth-layout');
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('bg-default');
     this.BarChart();
     this.LineChart();
     this.DoughnutChart();
  }

  public chart: any;

  BarChart(){
      this.chart = new Chart("BarChart", {
        type: 'bar', //this denotes tha type of chart
        data: {// values on X-Axis
          labels: ['Riyadh', 'Jaddah', 'Taif','Hail','Makkah' ],
  	       datasets: [
            {
              data: ['467','576', '572', '79', '92'],
              backgroundColor:  [ '#2374DB', '#2ecc71', '#e74c3c','#DB2360', '#F9C728'],
             }
          ]
        },
        options: {
          aspectRatio:3,
           legend: {
                    position: 'top',
                    display: true,
                    fullWidth: true,
                    labels: {
                      fontSize: 50,
                      fontColor: '236AFF',
                    }
                  }
        }
      });
    }
LineChart(){
      this.chart = new Chart("lineChart", {
        type: 'line', //this denotes tha type of chart
        data: {// values on X-Axis
          labels: ['Riyadh', 'Jaddah', 'Taif','Hail','Makkah' ],
  	       datasets: [
            {
              label:"Top 5 Services",
              data: ['467','576', '572', '79', '92'],
              backgroundColor:  [ '#DB8F23','#29FF29','#2374DB','#F233D2','#DB8F23']
            }
          ]
        },
        options: {
      legend: {
          position: 'top',
          display: true,
          fullWidth: true,
          labels: {
            fontSize: 50,
            fontColor: '236AFF',
          }
        }
              }
      });
    }
DoughnutChart(){
          this.chart = new Chart("DoughnutChart", {
            type: 'doughnut', //this denotes tha type of chart
            data: {// values on X-Axis
              labels: ['Riyadh', 'Jaddah', 'Taif','Hail','Makkah' ],
      	       datasets: [
                {
                 label:"Top 5 Services",
                  data: ['467','576', '572', '79', '92'],
                  backgroundColor: [ '#2ecc71','#29FF29','#2374DB','#F233D2','#DB8F23']
                }
              ]
            },
            options: {
        legend: {
          position: 'top',
          display: true,
          fullWidth: true,
          labels: {
            fontSize: 50,
            fontColor: '236AFF',
          }
        }
          }
          });
        }
}

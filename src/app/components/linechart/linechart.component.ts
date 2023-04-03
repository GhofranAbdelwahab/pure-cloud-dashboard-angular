import {Component, OnInit} from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {
  public chart: Chart;

  constructor() {
  }

  ngOnInit(): void {
    this.lineChart();
  }

  lineChart() {
    this.chart =new Chart("lineChart", {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'My First Dataset',
          data: [10, 20, 20, 50, 50, 60],
          borderColor: 'rgb(255, 99, 132)',
          fill: false
        }, {
          label: 'My Second Dataset',
          data: [5, 30, 25, 60, 45, 55],
          borderColor: 'rgb(54, 162, 235)',
          fill: false
        }]
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Month'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Value'
            }
          }
        }
      }
    });
  }
}

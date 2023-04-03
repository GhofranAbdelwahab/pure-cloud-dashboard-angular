import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-polararea',
  templateUrl: './polararea.component.html',
  styleUrls: ['./polararea.component.css']
})
export class PolarareaComponent implements OnInit {
  public chart: Chart;

  constructor() { }

  ngOnInit(): void {
    this.polarAreaChart()
  }
  polarAreaChart() {
    this.chart = new Chart("PolarAreaChart", {
      type: 'polarArea',
      data: {
        labels: ['Red', 'Green', 'Blue', 'Yellow', 'Purple'],
        datasets: [{
          data: [12, 19, 3, 17, 28],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 205, 86, 0.6)',
            'rgba(153, 102, 255, 0.6)'
          ]
        }]
      },
      options: {
        scales: {
          r: {
            ticks: {
              beginAtZero: true
            }
          }
        }
      }
    });
  }
}

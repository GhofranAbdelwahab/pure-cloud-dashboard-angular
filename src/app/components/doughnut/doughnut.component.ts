import {Component, OnInit} from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent implements OnInit {
  public chart: Chart;

  constructor() {
  }

  ngOnInit(): void {
    this.doughnutChart();
  }

  doughnutChart() {
    this.chart = new Chart("DoughnutChart", {
      type: 'doughnut', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: ['Riyadh', 'Jaddah', 'Taif', 'Hail', 'Makkah'],
        datasets: [
          {
            label: "Top 5 Services",
            data: ['467', '576', '572', '79', '92'],
            backgroundColor: ['#2ecc71', '#29FF29', '#2374DB', '#F233D2', '#DB8F23']
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

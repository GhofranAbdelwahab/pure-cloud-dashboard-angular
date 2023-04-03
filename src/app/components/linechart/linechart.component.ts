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
    this.chart = new Chart("lineChart", {
      type: 'line', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: ['Riyadh', 'Jaddah', 'Taif', 'Hail', 'Makkah'],
        datasets: [
          {
            label: "Top 5 Services",
            data: ['467', '576', '572', '79', '92']
          }
        ]
      },
      options: {
        legend: {
          position: 'top',
          display: true,
          fullWidth: true,
          labels: {
            fontSize: 20,
            fontColor: '#000000',
          }
        }
      }
    });
  }
}

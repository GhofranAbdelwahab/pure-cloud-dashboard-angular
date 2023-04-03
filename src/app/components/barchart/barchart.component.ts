import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  public chart: Chart;

  constructor() { }

  ngOnInit(): void {
    this.barChart();
  }

  barChart(){
    this.chart = new Chart("BarChart", {
      type: 'bar', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: ['Riyadh', 'Jaddah', 'Taif','Hail','Makkah' ],
        datasets: [
          {
            label:"Top 5 Services",
            data: ['690','576', '572', '79', '92'],
            backgroundColor:  [ '#2374DB', '#2ecc71', '#e74c3c','#DB2360', '#F9C728'],
          }
        ]
      },
      options: {
        aspectRatio:2,
        legend: {
          position: 'top',
          display: true,
          fullWidth: true,
          labels: {
            fontSize: 20,
            fontColor: '#00000',
          }
        }
      }
    });
  }
}

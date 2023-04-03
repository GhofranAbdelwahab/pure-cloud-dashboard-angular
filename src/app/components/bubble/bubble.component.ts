import {Component, OnInit} from '@angular/core';
import Chart from 'chart.js';


@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.css']
})
export class BubbleComponent implements OnInit {
  public chart: Chart;

  constructor() {
  }

  ngOnInit(): void {
    this.bubbleChart()
  }

  bubbleChart() {
    this.chart = new Chart("BubbleChart", {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    });
  }
}

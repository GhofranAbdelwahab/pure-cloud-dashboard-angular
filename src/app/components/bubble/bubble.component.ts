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
      type: 'bubble',
      data: {
        datasets: [{
          label: 'First Dataset',
          data: [{
            x: 20,
            y: 30,
            r: 15
          }, {
            x: 40,
            y: 10,
            r: 10
          }],
          backgroundColor: 'rgba(255, 99, 132, 0.6)'
        }, {
          label: 'Second Dataset',
          data: [{
            x: 10,
            y: 20,
            r: 5
          }, {
            x: 30,
            y: 40,
            r: 20
          }],
          backgroundColor: 'rgba(54, 162, 235, 0.6)'
        }]
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'X axis'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Y axis'
            }
          }
        }
      }
    });
  }
}

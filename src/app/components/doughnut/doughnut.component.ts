import {Component, OnInit} from '@angular/core';
import Chart from 'chart.js';
import {DashboardResponse} from "../../models/dashboard.model";
import {DashboardService} from "../../services/dashboard.service";

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent implements OnInit {
  public chart: Chart;
  private dashboard: DashboardResponse[] = [];

  constructor(private userServices: DashboardService) {
  }

  ngOnInit(): void {
    setInterval(() => {
      this.loadDashboard();
      this.doughnutChart();
    }, 10000);
  }

  public loadDashboard() {
    this.userServices.loadDashboard().subscribe(
      res => {
        this.dashboard = res;
      },
      err => {
        this.dashboard = []
      }
    );
  }

  doughnutChart() {
    this.chart = new Chart("DoughnutChart", {
      type: 'doughnut',
      data: {
        labels: this.dashboard.map(item => item.metric ),
        datasets: [{
          label: '# of Votes',
          data: this.dashboard.map(item => item.stats.count ),
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Our Calls'
        }
      }
    });
  }
}

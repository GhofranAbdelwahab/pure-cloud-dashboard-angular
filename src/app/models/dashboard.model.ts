export class DashboardResponse {
  metric: string;
  stats: Stats;

  constructor(metric: string, stats: Stats) {
    this.metric = metric;
    this.stats = stats;
  }
}

export class Stats {
  count: number;
  max: number;
  min: number;
  sum: number;

  constructor(count: number, max: number, min: number, sum: number) {
    this.count = count;
    this.max = max;
    this.min = min;
    this.sum = sum;
  }
}

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

  constructor(count: number) {
    this.count = count;
  }
}

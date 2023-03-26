export class DashboardResponse {
  private results: Array<Result>;

  constructor(results: Array<Result>) {
    this.results = results;
  }
}

export class Result {
  private group: Group;
  private data: Array<Data>;

  constructor(group: Group, data: Array<Data>) {
    this.group = group;
    this.data = data;
  }
}

export class Group {
  private mediaType: string;

  constructor(mediaType: string) {
    this.mediaType = mediaType;
  }
}

export class Data {
  private interval: string;
  private metrics: Array<Metric>;

  constructor(interval: string, metrics: Array<Metric>) {
    this.interval = interval;
    this.metrics = metrics;
  }
}

export class Metric {
  private metric: string;
  private stats: Stats;

  constructor(metric: string, stats: Stats) {
    this.metric = metric;
    this.stats = stats;
  }

}

export class Stats {
  private count: number;
  private max: number;
  private min: number;
  private sum: number;

  constructor(count: number, max: number, min: number, sum: number) {
    this.count = count;
    this.max = max;
    this.min = min;
    this.sum = sum;
  }
}

import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import Highcharts from 'highcharts';
import {
  HighchartsChartComponent,
  HighchartsChartModule,
} from 'highcharts-angular';
import { Serie } from '../models/serie';

@Component({
  selector: 'app-signal-graph',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './signal-graph.component.html',
  styleUrl: './signal-graph.component.sass',
})
export class SignalGraphComponent implements OnChanges {
  @Input()
  signals?: Serie[] | null;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'line',
      zooming: { type: 'x' },
      panning: { type: 'x', enabled: true },
      panKey: 'ctrl',
    },
    title: {
      text: '',
    },
    scrollbar: { enabled: true },
    xAxis: {
      title: {
        text: 'X',
      },
      scrollbar: { enabled: true },
    },
    credits: {
      enabled: false,
    },
  };

  chart!: Highcharts.Chart;
  updateChart: boolean = false;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['signals'] || changes['singleYAxis']) {
      this.renderChart();
    }
  }

  renderChart(): void {
    let series: Highcharts.SeriesOptionsType[] | undefined;

    series = this.signals?.map((serie, index) => ({
      type: 'line',
      name: serie.title,
      data: serie.points.map((point) => [point.x, point.y])
    }));

    this.chartOptions = {
      ...this.chartOptions,
      series: series,
      title: { text: `Numbre of series : ${this.signals?.length ?? 0}` },
    };
  }
}

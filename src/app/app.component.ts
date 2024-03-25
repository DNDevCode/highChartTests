import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { SignalGraphComponent } from './signal-graph/signal-graph.component';
import { Serie } from './models/serie';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HighchartsChartModule,
    SignalGraphComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
singleAxes(e: any) {
  this.singleAxes$.next(e.target.checked);
}


  title = 'highChartTests';

  signals$: BehaviorSubject<Serie[]> = new BehaviorSubject<Serie[]>([]);
  singleAxes$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);


  addTwoSignal() {
    this.signals$.next([
      {
        title: "signa 1", points: [
        { x: Math.random(), y: Math.random() },
        { x: Math.random(), y: Math.random() },
        { x: Math.random(), y: Math.random() },
        { x: Math.random(), y: Math.random() }
      
      ].sort((a, b) => a.x - b.x)},
      {
        title: "signa 2", points: [
        { x: Math.random(), y: Math.random() },
        { x: Math.random(), y: Math.random() },
        { x: Math.random(), y: Math.random() },
        { x: Math.random(), y: Math.random() }
      
      ].sort((a, b) => a.x - b.x)}
    ]);
  }


  addOneSignal() {
    this.signals$.next([
      {
        title: "signa 1", points: [
        { x: Math.random(), y: Math.random() },
        { x: Math.random(), y: Math.random() },
        { x: Math.random(), y: Math.random() },
        { x: Math.random(), y: Math.random() }
      
      ].sort((a, b) => a.x - b.x)}
    ])
  }
}

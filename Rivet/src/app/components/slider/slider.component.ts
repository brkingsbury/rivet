import { Component, OnInit } from '@angular/core';
// import {coerceNumberProperty} from '@angular/cdk/coercion';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['../components.component.scss']
})
export class SliderComponent implements OnInit {
  disabled = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;

  get tickInterval(): number | 'auto' {
    return this.showTicks ? ('auto') : 0;
  }
  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
  styleUrls: ['../components.component.scss']
})
export class TooltipsComponent implements OnInit {
  tooltipValue = 'inital tooltip value';
  showTooltip = false;
  constructor() {}

  triggerError = function(): void {
    this.showTooltip = !this.showTooltip;
  };

  ngOnInit() {}
}

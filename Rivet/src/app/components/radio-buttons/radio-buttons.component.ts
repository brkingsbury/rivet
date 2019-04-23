import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['../components.component.scss']
})
export class RadioButtonsComponent implements OnInit {
  default = true;
  isDis = false;
  isRo = false;
  isSmall = false;
  isAbove = false;

  constructor() {}

  ngOnInit() {}
}

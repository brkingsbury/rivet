import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['../components.component.scss']
})
export class CheckboxComponent implements OnInit {
    isDisabled = false;
    isRo = false;
    isSmall = false;
    isAbove = false;
    isIn = false;

  constructor() { }

  ngOnInit() {
  }

}

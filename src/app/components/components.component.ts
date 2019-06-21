import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
  checked: boolean;
  currencyInput = new FormControl(35);
  percentageInput = new FormControl(0.35);

  constructor() {}

  ngOnInit() {}

  disable() {
    this.currencyInput.disable();
  }
}

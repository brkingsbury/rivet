import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['../components.component.scss']
})
export class ExpansionPanelComponent implements OnInit {
  constructor() {}

  mockDelete = function(e) {
    alert('deleted');
  };

  ngOnInit() {}
}

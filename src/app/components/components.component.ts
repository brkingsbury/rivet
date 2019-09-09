import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';

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

@Component({
  selector: 'app-compliance-marker',
  templateUrl: './compliance-marker-template.html'
})
export class ComplianceComponent {
    constructor(public dialog: MatDialog) {}
    openAADialog(): void {
        const dialogRef = this.dialog.open(ComplianceDialogComponent, {
          width: '600px',
          autoFocus: false
        });
      }
}

@Component({
  selector: 'app-compliance-dialog',
  templateUrl: './compliance-marker-dialog-template.html'
})
export class ComplianceDialogComponent {}

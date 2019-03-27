import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-event-picker-dialog',
  templateUrl: './event-picker-template.html'
})
export class EventPickerDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EventPickerDialogComponent>,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-event-picker',
  templateUrl: './event-picker.component.html',
  styleUrls: ['../components.component.scss']
})
export class EventPickerComponent {
  constructor(public dialog: MatDialog) {}

  openEventPicker(): void {
    const dialogRef = this.dialog.open(EventPickerDialogComponent, {
      width: 'auto',
      autoFocus: false,
      panelClass: 'event-picker'
    });
  }
}

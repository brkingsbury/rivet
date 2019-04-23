import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-dialog',
  templateUrl: './dialog-template.html'
})
export class DialogComponentDialogComponent {
  constructor(public dialogRef: MatDialogRef<DialogComponentDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['../components.component.scss']
})
export class DialogComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponentDialogComponent, {
      width: '500px',
      autoFocus: false
    });
  }
}

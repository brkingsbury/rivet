import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-snackbar-temp',
    templateUrl: './snackbar-template.html'
})

export class Snackbar2Component {
    constructor(private _snackBar2: MatSnackBar) { }
    closeSnack() {
        this._snackBar2.dismiss();
    }
}

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['../components.component.scss']
})

export class SnackbarComponent implements OnInit {
    isTemp = false;
    isTs = false;
    constructor(private _snackBar: MatSnackBar) { }

    openSnackBar(message: string, action: string) {
        this._snackBar.open('I am a snackbar', 'Close Me', {});
    }
    openSnackBar2() {
        this._snackBar.openFromComponent(Snackbar2Component, {});
    }

    ngOnInit() {}
}

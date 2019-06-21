import { Component, OnInit } from '@angular/core';
// import { RouterState } from '@angular/routerState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  difCursor = false;
  hasNav = false;
  darkMode = false;

  toggleCursor() {
    this.difCursor = !this.difCursor;
  }
  test() {
    this.darkMode = !this.darkMode;
  }

  ngOnInit() {}
}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    @ViewChild('content') content: ElementRef;
  difCursor = false;
  hasNav = false;
  darkMode = false;
  keyYes = false;

  toggleCursor() {
    this.difCursor = !this.difCursor;
  }
  test() {
    this.darkMode = !this.darkMode;
  }
  skip() {
    this.content.nativeElement.focus();
  }
  onKeyup(event) {
      if (event.keyCode === 13 || event.keyCode === 32) {
          this.skip();
      }
  }

  onKeydown(event) {
      if (event.keyCode === 9) {
          this.keyYes = true;
      }
  }

  endFocus() {
      this.keyYes = false;
  }

  ngOnInit() {}
}

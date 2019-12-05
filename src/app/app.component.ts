import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('content') content: ElementRef;
  difCursor = false;
  hasNav = false;
  keyYes = false;

  colorDrawer = false;

  toggleDrawer() {
    this.colorDrawer = !this.colorDrawer;
  }

  toggleCursor() {
    this.difCursor = !this.difCursor;
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
}


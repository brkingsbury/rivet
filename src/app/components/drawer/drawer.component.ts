import { Component } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['../components.component.scss']
})
export class DrawerComponent {
  constructor() {}

  toggleVariable = false;

  toggleDrawer = function(): void {
    this.toggleVariable = !this.toggleVariable;
  };
}

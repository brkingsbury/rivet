import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rvt-drawer',
  templateUrl: './rivet-drawer.component.html',
  styleUrls: ['./rivet-drawer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RivetDrawerComponent implements OnChanges {
  @Input() drawerOpen: boolean;

  @Output() public drawerCloseEvent = new EventEmitter<null>();

  public get panelOpen(): boolean {
    return this.drawerOpen;
  }

  public toggleDrawer = function (): void {
    this.drawerOpen ? this.closeDrawer() : this.openDrawer();
  };

  public closeDrawer = function (): void {
    this.drawerCloseEvent.emit();
    this.drawerOpen = false;
  };

  public openDrawer = function (): void {
    this.drawerOpen = true;
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes.drawerOpen) {
      if (changes.drawerOpen.currentValue === true) {
        document.documentElement.style.overflowY = 'hidden';
        this.drawerCloseEvent.emit();
      } else if (changes.drawerOpen.currentValue === false && changes.drawerOpen.previousValue !== undefined) {
        document.documentElement.style.overflowY = 'auto';
      }
    }
  }
}

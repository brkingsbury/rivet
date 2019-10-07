import { Component, ViewEncapsulation, Output, Input, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'advicent-rivet-mini-expansion-panel',
  templateUrl: './rivet-mini-expansion-panel.component.html',
  styleUrls: ['./rivet-mini-expansion-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RivetMiniExpansionPanelComponent {
  @Input() panelOpen = false;
  @Output() panelEmitter = new EventEmitter<object>();

  public toggleMiniExpansion = function(): void {
    this.panelOpen = !this.panelOpen;
    this.panelEmitter.emit(this.panelOpen);
  };

  public closeExpansion = function(): void {
    this.panelOpen = false;
    this.panelEmitter.emit(this.panelOpen);
  };

  public openExpansion = function(): void {
    this.panelOpen = true;
    this.panelEmitter.emit(this.panelOpen);
  };
}

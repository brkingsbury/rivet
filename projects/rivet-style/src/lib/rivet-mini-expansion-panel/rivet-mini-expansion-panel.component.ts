import { Component, EventEmitter, Input, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'advicent-rivet-mini-expansion-panel',
  templateUrl: './rivet-mini-expansion-panel.component.html',
  styleUrls: ['./rivet-mini-expansion-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RivetMiniExpansionPanelComponent {
  private _panelOpen = false;

  @Input() public set panelOpen( panelOpen: boolean) {
    panelOpen ? this.openExpansion() : this.closeExpansion();
  }

  @Output() public panelOpenEvent = new EventEmitter<null>();

  public get panelOpen(): boolean {
    return this._panelOpen;
  }

  public toggleMiniExpansion = function(): void {
    this._panelOpen ? this.closeExpansion() : this.openExpansion();
  };

  public closeExpansion = function(): void {
    this._panelOpen = false;
  };

  public openExpansion = function(): void {
    this._panelOpen = true;
    this.panelOpenEvent.emit();
  };
}

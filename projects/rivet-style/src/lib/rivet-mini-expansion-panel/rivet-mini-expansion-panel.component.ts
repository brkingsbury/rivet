import { Component, EventEmitter, Input, Output, ViewEncapsulation, OnInit } from '@angular/core';

type ExpansionArrowDirection = 'up' | 'down' | 'left' | 'right';

@Component({
    selector: 'advicent-rivet-mini-expansion-panel',
    templateUrl: './rivet-mini-expansion-panel.component.html',
    styleUrls: ['./rivet-mini-expansion-panel.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class RivetMiniExpansionPanelComponent {

    @Input() public arrowRight: boolean;
    @Input() public openedArrowDirection: ExpansionArrowDirection = 'down';
    @Input() public closedArrowDirection: ExpansionArrowDirection = 'right';

    @Input() public set panelOpen(panelOpen: boolean) {
        panelOpen ? this.openExpansion() : this.closeExpansion();
    }

    @Output() public panelOpenEvent = new EventEmitter<void>();

    private _panelOpen = false;

    public get panelOpen(): boolean {
        return this._panelOpen;
    }

    public toggleMiniExpansion = function (): void {
        this._panelOpen ? this.closeExpansion() : this.openExpansion();
    };

    public closeExpansion = function (): void {
        this._panelOpen = false;
    };

    public openExpansion = function (): void {
        this._panelOpen = true;
        this.panelOpenEvent.emit();
    };
}

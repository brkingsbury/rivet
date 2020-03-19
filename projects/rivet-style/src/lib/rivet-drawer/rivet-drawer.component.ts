import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';

const animations: any = [
    trigger(
        'fadeTransition',
        [
            transition(
                ':enter',
                [
                    style({ opacity: 0 }),
                    animate('400ms ease-in-out',
                        style({ opacity: 1 }))
                ]
            ),
            transition(
                ':leave',
                [
                    style({ opacity: 1 }),
                    animate('400ms ease-in-out',
                        style({ opacity: 0 }))
                ]
            )
        ]
    )
];

@Component({
    selector: 'rvt-drawer',
    templateUrl: './rivet-drawer.component.html',
    styleUrls: ['./rivet-drawer.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: animations
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

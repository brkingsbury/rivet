import { Component, HostListener, Input } from '@angular/core';


@Component({
    selector: 'rvt-popover',
    templateUrl: './rivet-popover.component.html',
    styleUrls: ['./rivet-popover.component.scss'],
})
export class RivetPopoverComponent {
    @Input() popoverTrigger: boolean;

    @HostListener('document:click', ['$event'])
    outsideClick(event) {
        // if (!this.x(event.target)) {
        //     this.popoverTrigger = false;
        // }
        // this.popoverVisible = false;
        console.log('other click');
    }
}

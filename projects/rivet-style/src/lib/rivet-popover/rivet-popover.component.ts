import { Component, Input } from '@angular/core';


@Component({
    selector: 'rvt-popover',
    templateUrl: './rivet-popover.component.html',
    styleUrls: ['./rivet-popover.component.scss'],
})
export class RivetPopoverComponent {
    @Input() popoverTrigger: false;
}

import { Component } from '@angular/core';


@Component({
    selector: 'rvt-popover',
    template: '<div class="popover-container"><ng-content></ng-content></div>',
    styleUrls: ['./rivet-popover.component.scss'],
})
export class RivetPopoverComponent {
    // @Input () popoverVisible: boolean;
    // @Input() isVis: boolean;
    // @Output() isPopover: EventEmitter<any> = new EventEmitter();

    // @HostListener('window:resize', [])
    // onResize() {
    //     console.log('resizing');
    //     this.isVis = false;
    //     this.isPopover.emit(this.isVis);
    //     console.log('vis', this.isVis);
    // }
}

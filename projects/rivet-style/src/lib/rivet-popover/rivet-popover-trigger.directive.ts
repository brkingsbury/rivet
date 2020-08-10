import { Directive, HostListener } from '@angular/core';
import { RivetPopoverService } from '../rivet-services/rivet-popover.services';

@Directive({
    selector: '[rvtPopoverTrigger]'
})
export class RivetPopoverTriggerDirective {

    constructor(private popoverService: RivetPopoverService) { }

    @HostListener('click', ['$event'])
    onClick() {
        console.log('clicked');
        // pass id to service
        this.popoverService.toggle('testId');
    }

}

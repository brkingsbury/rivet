import { Directive, HostListener } from '@angular/core';
import { RivetPopoverService } from '../rivet-services/rivet-popover.services';

@Directive({
  selector: '[rvtPopoverTrigger]'
})
export class RivetPopoverTriggerDirective {

    constructor(private popService: RivetPopoverService) {}

  @HostListener('click') onClick() {
      // pass id to service
      this.popService.toggle('testId');
  }

}

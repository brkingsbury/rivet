import { Component, Input } from '@angular/core';
import { RivetPopoverService } from '../rivet-services/rivet-popover.service';

@Component({
  selector: 'rvt-popover',
  template:
    '<div class="popover-container"><ng-content></ng-content>-({{status}})-</div>',
  styleUrls: ['./popover.component.scss']
})
export class RivetPopoverComponent {
  @Input() trigger: string;
  popoverVisible = false;
  status = 'empty';
  constructor(private popService: RivetPopoverService) {
    // popoverVisible = popservice.currentPopover;

    if (popService.currentPopover === this.trigger) {
      this.popoverVisible = true;
      console.log('should be working');
    } else {
      this.popoverVisible = false;
      console.log('not working');
    }
  }

}

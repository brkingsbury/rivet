import { Directive, HostListener, Input } from '@angular/core';
import { RivetPopoverService } from '../rivet-services/rivet-popover.service';

@Directive({
  selector: '[rvtPopoverTrigger]'
})
export class RvtPopoverDirective {
  constructor(private popService: RivetPopoverService) {}
  @Input() rvtPopoverTrigger: string;

  @HostListener('click', ['$event']) onClick(event) {
    // pass id to service
    this.popService.trigger(this.rvtPopoverTrigger);
  }

  // use <button rvtPopoverTrigger></button> for directive
}

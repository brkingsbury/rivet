import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[rvtPopoverTrigger]'
})
export class PopoverTriggerDirective {
    popoverVisible = false;

    private trig: HTMLElement;
    constructor(el: ElementRef) {
        this.trig = el.nativeElement;
        // this.tooltipEl.style.left = this.hiddenOffset;
        // this.tooltipEl.classList.add('rivet-tooltip');
    }

    @HostListener('click', ['$event'])
    togglePop() {
        this.popoverVisible = !this.popoverVisible;
        console.log('this', this.trig, event);
        console.log('1' + this.trig.offsetTop);
        console.log('2' + this.trig.offsetHeight);
    }
    // onClick($event) {
    //     console.log('clicked: ' + $event);
    // }
}

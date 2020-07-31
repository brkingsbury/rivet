import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
    selector: '[rvtPopoverTrigger]'
})
export class PopoverTriggerDirective {

    private el = document.documentElement;
    @Input() triggerFor: string;
    @Output() popoverToggle: EventEmitter<any> = new EventEmitter();

    @HostListener('click', [''])
    togglePop() {
        const target = event.target as HTMLElement;
        this.defaultPosition(target);
        this.popoverToggle.emit();

    }
    defaultPosition(e) {
        const triggerWidth = e.offsetWidth;
        this.el.style.setProperty('--popover-top', (e.offsetTop + e.offsetHeight) + 'px');
        this.el.style.setProperty('--popover-right', (this.el.scrollWidth - (e.offsetLeft + triggerWidth)) + 'px');
        this.positionArrow(triggerWidth);
    }
    positionArrow(width) {
        const pos = ((width / 2) - 10);
        this.el.style.setProperty('--popover-arrow-right', pos + 'px');
    }
}

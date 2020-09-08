import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[rvtTooltip]'
})
export class RvtTooltipDirective implements OnChanges, OnInit, OnDestroy, AfterViewInit {
    @Input() rvtTooltip: string;
    @Input() rvtTooltipClass: string;
    @Input() rvtManualTooltipShow?: boolean;
    @Input() rvtTooltipAbsolutePos?: boolean;

    private tooltipEl: HTMLElement = document.createElement('div');
    private anchorEl: HTMLElement;
    private hiddenOffset = '-900000px';

    constructor(el: ElementRef) {
        this.anchorEl = el.nativeElement;
        this.tooltipEl.style.left = this.hiddenOffset;
        this.tooltipEl.classList.add('rivet-tooltip');
    }

    getTooltipPosition = function (): any {
        const tooltipPosConf: any = {};
        const viewportOffset = this.anchorEl.getBoundingClientRect();
        this.tooltipEl.style.display = 'block';

        let rightOverflowOffset = document.documentElement.offsetWidth -
            (viewportOffset.left + (this.anchorEl.offsetWidth / 2) + this.tooltipEl.offsetWidth / 2);
        let leftOverflowOffset = viewportOffset.left - (this.tooltipEl.offsetWidth / 2 - this.anchorEl.offsetWidth / 2);

        // assigns a negative number, or zero.
        rightOverflowOffset = rightOverflowOffset >= 0 ? 0 : rightOverflowOffset;
        // assigns a positive number, or zero (is fed a negative number)
        leftOverflowOffset = leftOverflowOffset >= 0 ? 0 : Math.abs(leftOverflowOffset);
        // total offsets to reduce variables
        const overflowOffset = rightOverflowOffset + leftOverflowOffset;

        if (this.rvtTooltipAbsolutePos !== undefined) {
            // If the tooltip is attached to the body instead of inline the positioning must be done relative to the body.
            const topScroll = window.pageYOffset || document.documentElement.scrollTop;
            const leftScroll = window.pageXOffset || document.documentElement.scrollLeft;
            tooltipPosConf.arrowOffset = -overflowOffset;
            tooltipPosConf.topOffset = viewportOffset.top + topScroll - this.tooltipEl.offsetHeight - 14;
            tooltipPosConf.leftOffset = viewportOffset.left + this.anchorEl.offsetWidth / 2 - this.tooltipEl.offsetWidth / 2 +
                400 + overflowOffset + leftScroll;

        } else {
            // Tooltip show/hide is managed by moving the element off screen.
            // This allows us to evaluate the width and height of the tooltip,
            // whereas setting something like 'display: none' would return undefined width and height
            tooltipPosConf.arrowOffset = -overflowOffset;
            tooltipPosConf.topOffset = this.anchorEl.offsetTop - this.tooltipEl.offsetHeight - 14;
            tooltipPosConf.leftOffset =
                this.anchorEl.offsetLeft + this.anchorEl.offsetWidth / 2 - this.tooltipEl.offsetWidth / 2 + 400 + overflowOffset;
        }
        return tooltipPosConf;
    };

    showTooltip = function (): void {
        // This is the bounding box for the element the tooltip is pointing to
        this.tooltipEl.style.display = 'block';
        const tooltipPosConf = this.getTooltipPosition();
        // set --arrow-offset variable first, since it can't be assigned as a style attribute
        this.tooltipEl.style = '--arrow-offset: ' + tooltipPosConf.arrowOffset + 'px;';
        this.tooltipEl.style.top = tooltipPosConf.topOffset + 'px';
        this.tooltipEl.style.left = tooltipPosConf.leftOffset + 'px';
    };

    refreshTooltipPosition = function (): void {
        if (this.tooltipEl.style.left !== this.hiddenOffset) {
            // only apply re-centering if the tooltip isn't at its offset position
            const tooltipPosConf = this.getTooltipPosition();
            this.tooltipEl.style = '--arrow-offset: ' + tooltipPosConf.arrowOffset + 'px;';
            this.tooltipEl.style.top = tooltipPosConf.topOffset + 'px';
            this.tooltipEl.style.left = tooltipPosConf.leftOffset + 'px';
        }

    };

    hideTooltip = function (): void {
        this.tooltipEl.style.left = this.hiddenOffset;
        this.tooltipEl.style.display = 'none';
    };

    @HostListener('mouseover', ['$event.target'])
    onMouseOver() {
        // Only show tooltip on mouseover if there is no manual tooltip boolean
        if (this.rvtManualTooltipShow === undefined) {
            this.showTooltip();
        }
    }
    @HostListener('mouseout', ['$event.target'])
    onMouseOut() {
        // Only hide tooltip on mouseout if there is no manual tooltip boolean
        if (this.rvtManualTooltipShow === undefined) {
            this.hideTooltip();
        }
    }

    ngOnInit() {
        // Assign tooltip inner text and optional class once the inputs have come through
        this.tooltipEl.innerText = this.rvtTooltip;
        if (this.rvtTooltipClass !== undefined) {
            this.tooltipEl.classList.add(this.rvtTooltipClass);
        }
    }
    ngAfterViewInit() {
        if (this.rvtTooltipAbsolutePos !== undefined) {
            // If the tooltip is mant to be attached to the element must be insterted into the body element instead of inline
            document.body.appendChild(this.tooltipEl);
        } else {
            this.anchorEl.insertAdjacentElement('beforebegin', this.tooltipEl);
        }
        // Setting up the tooltip element as a sibling element allows the tooltip to follow along with DOM resizing more simply
        // (as opposed to placing it just inside the body tag), so it's less likely to get lost.
    }

    ngOnChanges(changes: SimpleChanges) {
        // allow for dynamic changes to text
        if (changes.rvtTooltip) {
            this.tooltipEl.innerText = changes.rvtTooltip.currentValue;
            if (changes.rvtTooltip.previousValue !== undefined) {
                this.refreshTooltipPosition(); // if this is not the initialization
                // of the tooltip, trigger the refresh function to re-center
            }
        }
        if (changes.rvtManualTooltipShow) {
            if (changes.rvtManualTooltipShow.currentValue === true) {
                this.showTooltip();
            } else {
                this.hideTooltip();
            }
        }
    }

    ngOnDestroy() {
        this.tooltipEl.remove();
    }
}

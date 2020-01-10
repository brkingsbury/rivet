import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
  AfterViewInit
} from '@angular/core';

@Directive({
  selector: '[rvtTooltip]'
})
export class RvtTooltipDirective implements OnChanges, OnInit, AfterViewInit {
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

  showTooltip = function (): void {
    if (this.rvtTooltipAbsolutePos !== undefined) {
      // If the tooltip is attached to the body instead of inline the positioning must be done relative to the body.
      const viewportOffset = this.anchorEl.getBoundingClientRect();
      const topScroll = window.pageYOffset || document.documentElement.scrollTop;
      this.tooltipEl.style.top = viewportOffset.top + topScroll - this.anchorEl.offsetHeight - 14 + 'px';
      this.tooltipEl.style.left = viewportOffset.left + this.anchorEl.offsetWidth / 2 - this.tooltipEl.offsetWidth / 2 + 200 + 'px';
    } else {
      // Tooltip show/hide is managed by moving the element off screen.  This allows us to evaluate the width and height of the tooltip,
      // whereas setting something like 'display: none' would return undefined width and height
      this.tooltipEl.style.top = this.anchorEl.offsetTop - this.tooltipEl.offsetHeight - 14 + 'px';
      this.tooltipEl.style.left =
        this.anchorEl.offsetLeft + this.anchorEl.offsetWidth / 2 - this.tooltipEl.offsetWidth / 2 + 200 + 'px';
    }
  };

  hideTooltip = function (): void {
    this.tooltipEl.style.left = this.hiddenOffset;
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
    }
    if (changes.rvtManualTooltipShow) {
      if (changes.rvtManualTooltipShow.currentValue === true) {
        this.showTooltip();
      } else {
        this.hideTooltip();
      }
    }
  }
}

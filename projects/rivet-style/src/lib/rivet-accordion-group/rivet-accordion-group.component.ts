import { Component, AfterViewInit, QueryList, ContentChildren, OnDestroy } from '@angular/core';
import { RivetMiniExpansionPanelComponent } from '../rivet-mini-expansion-panel/rivet-mini-expansion-panel.component';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'advicent-rivet-accordion-group',
  templateUrl: './rivet-accordion-group.component.html'
})
export class RivetAccordionGroupComponent implements AfterViewInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject();
  panelCollection: Array<RivetMiniExpansionPanelComponent>;

  @ContentChildren(RivetMiniExpansionPanelComponent) childPanels!: QueryList<RivetMiniExpansionPanelComponent>;

  closeOtherPanels(index) {
    this.panelCollection.forEach(function(panel, i) {
      if (index !== i) {
        panel.panelOpen = false;
      }
    });
  }

  ngAfterViewInit() {
    const component = this;
    this.panelCollection = this.childPanels.toArray();
    this.panelCollection.forEach(function(panel, i) {
      panel.panelEmitter
        .pipe(
          takeUntil(component.unsubscribe),
          tap(() => component.closeOtherPanels(i))
        )
        .subscribe();
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}

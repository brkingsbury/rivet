import { Component, AfterViewInit, QueryList, ContentChildren, OnDestroy } from '@angular/core';
import { RivetMiniExpansionPanelComponent } from '../rivet-mini-expansion-panel/rivet-mini-expansion-panel.component';
import { noop, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'advicent-rivet-accordion-group',
  templateUrl: './rivet-accordion-group.component.html'
})
export class RivetAccordionGroupComponent implements AfterViewInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject();
  private panelCollection: Array<RivetMiniExpansionPanelComponent>;

  @ContentChildren(RivetMiniExpansionPanelComponent) private childPanels!: QueryList<RivetMiniExpansionPanelComponent>;

  public ngAfterViewInit() {
    const component = this;
    this.panelCollection = this.childPanels.toArray();
    this.panelCollection.forEach((panel, i) => {
      panel.panelOpenEvent
        .pipe(
          takeUntil(component.unsubscribe),
          tap(() => component.closeOtherPanels(i))
        )
        .subscribe();
    });
  }

  public ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private closeOtherPanels(index): void {
    this.panelCollection.forEach((panel, i) => index !== i ? panel.closeExpansion() : noop());
  }
}

import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'advicent-rivet-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RivetExpansionPanelComponent implements OnChanges, OnInit, OnDestroy, AfterViewInit {
  @Input() preventCollapse = false;
  @Input() hideExpansionContent = false;
  @Input() panelExpanded = false;
  @Output() addButtonCallback?: EventEmitter<any> = new EventEmitter();
  @Output() deleteButtonCallback?: EventEmitter<any> = new EventEmitter();

  defaultExpansionHeight: number;
  isDeleting = false;
  panelHeight: number;
  showAddButton = false;
  showDeleteButton = false;

  private onChanges: Subject<SimpleChanges> = new Subject();
  private unsubscribe: Subject<void> = new Subject();

  constructor(private element: ElementRef, private cd: ChangeDetectorRef, private zone: NgZone) {}

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.onChanges.next(changes);
  }

  ngOnInit() {
    this.showAddButton = this.addButtonCallback.observers.length > 0;
    this.showDeleteButton = this.deleteButtonCallback.observers.length > 0;

    this.onChanges.pipe(takeUntil(this.unsubscribe)).subscribe((changes: SimpleChanges) => {
      if (changes.hideExpansionContent) {
        this.expandOnChange(!changes.hideExpansionContent.currentValue);
      }

      if (changes.panelExpanded) {
        this.expandOnChange(changes.panelExpanded.currentValue);
      }
    });
  }

  ngAfterViewInit() {
    this.initializeHeight();
    this.panelHeight = this.defaultExpansionHeight;
    this.cd.detectChanges();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.initializeHeight();
    this.resizePanel();
  }

  expandPanel(expanded) {
    this.panelExpanded = expanded;
    this.resizePanel();
  }

  setExpandedState(expanded, event) {
    if (!this.panelExpanded || !this.preventCollapse) {
      this.expandPanel(expanded);
    }
    event.stopPropagation();
  }

  delete() {
    this.isDeleting = true;
  }
  cancelDelete() {
    this.isDeleting = false;
  }
  confirmDelete() {
    this.deleteButtonCallback.emit();
  }

  addButtonClicked() {
    this.addButtonCallback.emit();
    this.resizePanel();
  }

  private expandOnChange(expand: boolean) {
    if (expand) {
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          this.expandPanel(expand);
          this.cd.detectChanges();
        }, 625);
      });
    } else {
      this.expandPanel(expand);
    }
  }

  private resizePanel() {
    const expansion = this.element.nativeElement.querySelector('.expansion');
    if (this.panelExpanded) {
      this.panelHeight = this.defaultExpansionHeight + expansion.offsetHeight;
    } else {
      this.panelHeight = this.defaultExpansionHeight;
    }
  }

  private initializeHeight() {
    this.defaultExpansionHeight = this.element.nativeElement.querySelector('.top-panel').offsetHeight;
  }
}

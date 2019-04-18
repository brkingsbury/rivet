import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  ChangeDetectorRef,
  Input
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'advicent-rivet-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class RivetExpansionPanelComponent implements AfterViewInit {
  @Input() formGroup?: FormGroup;
  @Output() addButtonCallback: EventEmitter<any> = new EventEmitter(); // TODO - make this only show optionally
  @Output() deleteButtonCallback: EventEmitter<any> = new EventEmitter();

  panelExpanded = false;
  defaultExpansionHeight: number;
  panelHeight: number;
  isDeleting = false;
  constructor(private element: ElementRef, private cd: ChangeDetectorRef) {}

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

  setExpandedState(expanded, event) {
    if (!this.panelExpanded || this.isValid()) {
      this.panelExpanded = expanded;
      this.resizePanel();
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

  private isValid() {
    return (
      this.formGroup === undefined ||
      this.formGroup.get('expandedFields').valid ||
      this.formGroup.get('expandedFields').untouched
    );
  }
}

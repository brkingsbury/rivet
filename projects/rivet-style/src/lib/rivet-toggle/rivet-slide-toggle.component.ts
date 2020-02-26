import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'rvt-slide-toggle',
  templateUrl: './rivet-slide-toggle.component.html',
  styleUrls: ['./rivet-slide-toggle.component.scss']
})
export class RivetSlideToggleComponent {

  // Set up FormControl input
  @Input() control: FormControl;

  // Set up direct binding inputs
  @Input() checked: boolean;
  @Input() disabled: boolean;

  // Set up label and event emitter
  @Input() label: string;
  @Output() toggleEvent = new EventEmitter();

  // Set toggle state to opposite
  public toggle(): void {
    if (this.control) {
      this.control.setValue(!this.control.value);
    } else {
      this.checked = !this.checked;
    }
    this.toggleEvent.emit(this.checked);
  }
}

import { Component, OnInit, Input, HostBinding, ViewChild, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RulesetService } from '../rivet-services/ruleset.service';

@Component({
  selector: 'advicent-rivet-input',
  template: `
    <input
      [formControl]="control"
      [attr.name]="name"
      [attr.autocomplete]="autocomplete"
      [attr.autofocus]="autofocus"
      [attr.disabled]="disabled"
      [attr.form]="form"
      [attr.list]="list"
      [attr.readonly]="readonly"
      [attr.required]="required"
      [attr.tabindex]="tabindex"
      [attr.type]="type"
      [attr.value]="value"
      #field
    />
    <i class="rivet-icon-{{ icon }}" *ngIf="icon"></i>
    <ng-content></ng-content>
  `,
  styleUrls: ['./rivet-input.component.scss']
})
export class RivetInputComponent implements OnInit {
  constructor(private rulesetService: RulesetService) {}
  @HostBinding('class.valid') get valid() {
    return this.control.valid && this.control.status === 'VALID';
  }
  @HostBinding('class.invalid') get invalid() {
    return this.control.invalid || this.control.status === 'INVALID';
  }
  @HostBinding('class.untouched') get untouched() {
    return this.control.untouched;
  }
  @HostBinding('class.touched') get touched() {
    return this.control.touched;
  }
  @HostBinding('class.pristine') get pristine() {
    return this.control.pristine;
  }
  @HostBinding('class.dirty') get dirty() {
    return this.control.dirty;
  }
  @HostBinding('class.vacant') get vacant() {
    return this.control.value.trim() === '';
  }
  @HostBinding('class.nonvacant') get nonvacant() {
    return this.control.value.trim() !== '';
  }
  @HostBinding('class.pending') get pending() {
    return this.control.pending;
  }
  public control: FormControl;
  get errors() {
    return this.control.errors || false;
  }
  @Input() validators = [];
  @Input() asyncValidators = [];
  @Input() ruleset;
  @Input() name;
  @Input() autocomplete;
  @Input() autofocus;
  @Input() disabled;
  @Input() form;
  @Input() list;
  @Input() readonly;
  @Input() required;
  @Input() tabindex;
  @Input() type;
  @Input() value;
  @Input() icon;
  @ViewChild('field') field;
  @HostListener('click', ['$event.target']) onclick(self) {
    this.field.nativeElement.focus();
  }
  ngOnInit() {
    if (this.ruleset) {
      this.validators = this.validators.concat(this.rulesetService.getSynchronousValidators(this.ruleset));
      this.asyncValidators = this.asyncValidators.concat(this.rulesetService.getAsynchronousValidators(this.ruleset));
    }
    this.control = new FormControl('', this.validators, this.asyncValidators);
    if (this.value) {
      this.control.setValue(this.value);
      this.control.updateValueAndValidity();
    }
  }
}

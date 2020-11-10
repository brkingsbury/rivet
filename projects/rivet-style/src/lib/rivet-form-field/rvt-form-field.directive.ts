  /* eslint-disable @typescript-tslint/directive-selector */
import { AfterContentInit, Directive, OnDestroy, Renderer2 } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Directive({
  selector: '[rvt-form-field]' //tslint:disable-line
})
export class RivetFormFieldDirective implements AfterContentInit, OnDestroy {

  private unsubscribe = new Subject();

  private readonly formControlInvalid = 'INVALID';
  private readonly standardClass = 'rvt-form-field';
  private readonly errorClass = 'rvt-form-field-error';
  private nativeElement: any;

  // This variable controls whether hints or errors are shown in MatFormField, set to null to hide both
  private messageDisplayState: 'error' | 'hint' = null;

  constructor(private matFormField: MatFormField,
    private renderer: Renderer2) {
  }

  ngAfterContentInit() {

    // We require an input with the matInput directive. That directive has the is focused state which is used for
    // floating labels, and is what we'll use to determine whether hints, errors, or nothing is shown
    if (!this.matFormField?._control?.stateChanges) {
      console.error('The rvt-form-field directive could not detect an input element \n' +
        '  Check that the input element does not appear conditionaly, i.e *ngIf');
      return;
    }

    // Test to see if an Angular reactive form control is provided, this is required to test and manipulate state
    if (!this.matFormField?._control?.ngControl) {
      // The extra spaces in these messages are for formatting nicely in the console.
      // These errors don't need to be logged outside of the application, they are to help developers
      console.error('The rvt-form-field directive could not detect an input element with an Angular FormControl \n\n' +
        '  Check that the input element does not appear conditionaly, i.e *ngIf. \n' +
        '  rvt-form-field requires the use of Angular Reactive Forms, check that a form control or form control name ' +
        'is provided on the input element and that the FormControl exists');
      return;
    }

    // This code must be in AfterContentInit because we rely on the MatFormField's children (specifically the control)
    // to be created which happens after ngOnInit and ngAfterViewInit. See MatFormField code in github for similar example
    // https://github.com/angular/components/blob/master/src/material/form-field/form-field.ts

    // Override the function that MatFormField uses to determine what messages are shown, we are the captain now.
    this.matFormField._getDisplayedMessages = () => this.messageDisplayState;

    // The default state of the element should be standard, set the native element and standard class
    this.nativeElement = this.matFormField._elementRef.nativeElement;
    this.renderer.addClass(this.nativeElement, this.standardClass);

    // Determine the starting display state of the input, I abhor setTimeout as much as everybody else, but
    // the underline and the floating label are placed programatically after this function completes, so we need
    // to do this at the end of this current cycle.
    setTimeout(() => this.determineDisplayState(), 0);

    // Subscribe to the stateChanges on the input which updates when the input is focused and
    // when the value inside the input is changed.
    this.matFormField._control.stateChanges.pipe(
      tap(() => this.determineDisplayState()),
      takeUntil(this.unsubscribe)
    ).subscribe();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  /**
   * Per UX specifications we want to deviate from Material Behaviors for Rvt Inputs. The following conditions
   * are required as of 3/19/2020
   *
   * Inputs should not show errors or have error formatting before they are focused.
   * When an input is focused if there are errors, show error formatting and error text.
   * If the input is invalid keep showing the error after the user has left the field.
   * When the input is focused and there are no errors, display a hint.
   * When the input is valid but is not focused hints should be hidden.
   *
   * This can be accomplished by using a combination of touched and focused states. If untouched don't show anything.
   * If focused show errors or hints respectively.
   * If the input has been touched show errors.
   *
   * If we need to show errors when the user has tried to submit, use the markAllAsTouched on the FormGroup / FormControl
   * to display all errors on the page. https://angular.io/api/forms/FormControl
   */
  private determineDisplayState() {
    this.messageDisplayState = null;

    const touchedAndInvalid = this.matFormField._control.ngControl.status === this.formControlInvalid &&
      this.matFormField._control.ngControl.touched;

    if (touchedAndInvalid) {
      this.renderer.removeClass(this.nativeElement, this.standardClass);
      this.renderer.addClass(this.nativeElement, this.errorClass);
      this.messageDisplayState = 'error';
      return;
    }

    // We're in a positive state, set the colors to standard and determine whether the hint is shown.
    this.renderer.removeClass(this.nativeElement, this.errorClass);
    this.renderer.addClass(this.nativeElement, this.standardClass);

    if (this.matFormField._control.focused) {
      this.messageDisplayState = 'hint';
      return;
    }
  }
}

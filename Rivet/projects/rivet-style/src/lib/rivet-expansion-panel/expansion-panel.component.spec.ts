import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentModule } from '../material-component-module';
import { RivetExpansionPanelComponent } from './expansion-panel.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

describe('RivetExpansionPanelComponent', () => {
  let component: RivetExpansionPanelComponent;
  let fixture: ComponentFixture<RivetExpansionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MaterialComponentModule],
      declarations: [RivetExpansionPanelComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RivetExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  describe('toggling', () => {
    it('should be toggleable', () => {
      expect(component.panelExpanded).toBe(false);
      const toggleButton = fixture.debugElement.query(By.css('.toggle-expansion-btn')).nativeElement;
      toggleButton.click();
      expect(component.panelExpanded).toBe(true);
      toggleButton.click();
      expect(component.panelExpanded).toBe(false);
      toggleButton.click();
      expect(component.panelExpanded).toBe(true);

      const closeButton = fixture.debugElement.query(By.css('.bottom-button-bar .close-btn')).nativeElement;
      closeButton.click();
      expect(component.panelExpanded).toBe(false);
    });
    describe('with form group input', function() {
      beforeEach(() => {
        component.formGroup = new FormGroup({
          otherFields: new FormGroup({ checkbox0: new FormControl(false, Validators.requiredTrue) }),
          expandedFields: new FormGroup({
            checkbox1: new FormControl(false, Validators.requiredTrue),
            text: new FormControl('', Validators.required)
          })
        });
      });
      it('should collapse if expanded content is invalid but untouched', () => {
        // sanity check
        expect(component.formGroup.valid).toBe(false);
        expect(component.formGroup.touched).toBe(false);

        expect(component.panelExpanded).toBe(false);
        const toggleButton = fixture.debugElement.query(By.css('.toggle-expansion-btn')).nativeElement;
        toggleButton.click();
        expect(component.panelExpanded).toBe(true);
        toggleButton.click();
        expect(component.panelExpanded).toBe(false);
        toggleButton.click();
        expect(component.panelExpanded).toBe(true);

        const closeButton = fixture.debugElement.query(By.css('.bottom-button-bar .close-btn')).nativeElement;
        closeButton.click();
        expect(component.panelExpanded).toBe(false);
      });
      it('should not collapse if expanded content is invalid and touched', () => {
        expect(component.panelExpanded).toBe(false);
        const toggleButton = fixture.debugElement.query(By.css('.toggle-expansion-btn')).nativeElement;
        toggleButton.click();
        expect(component.panelExpanded).toBe(true);

        component.formGroup.controls['expandedFields'].get('checkbox1').setValue(false);
        component.formGroup.controls['expandedFields'].get('checkbox1').markAsTouched();

        toggleButton.click();
        expect(component.panelExpanded).toBe(true); // didn't close

        const closeButton = fixture.debugElement.query(By.css('.bottom-button-bar .close-btn')).nativeElement;
        closeButton.click();
        expect(component.panelExpanded).toBe(true); // didn't close
      });
    });
  });

  it('should dynamically change height', fakeAsync(() => {
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      // not expanded by default
      expect(component.panelHeight).toEqual(component.defaultExpansionHeight);
      const toggleButton = fixture.debugElement.query(By.css('.toggle-expansion-btn')).nativeElement;

      // expanded
      toggleButton.click();
      expect(component.panelHeight).toBeGreaterThan(component.defaultExpansionHeight);

      // not expanded
      toggleButton.click();
      expect(component.panelHeight).toEqual(component.defaultExpansionHeight);
    });
  }));

  it('should call an add button callback', () => {
    spyOn(component.addButtonCallback, 'emit');
    const toggleButton = fixture.debugElement.query(By.css('.toggle-expansion-btn')).nativeElement;
    toggleButton.click();

    const addButton = fixture.debugElement.query(By.css('.bottom-button-bar .add-btn')).nativeElement;
    addButton.click();
    expect(component.addButtonCallback.emit).toHaveBeenCalledWith();
  });
});

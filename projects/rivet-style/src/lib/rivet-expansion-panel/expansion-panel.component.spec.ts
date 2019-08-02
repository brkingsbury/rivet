import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentModule } from '../material-component-module';
import { RivetExpansionPanelComponent } from './expansion-panel.component';

describe('RivetExpansionPanelComponent', () => {
  @Component({
    template: `
      <advicent-rivet-expansion-panel
        (addButtonCallback)="(addButtonCallback)"
        (deleteButtonCallback)="(deleteButtonCallback)"
      >
        <div header-content>Header content</div>
        <div expansion-content>Expansion content</div>
      </advicent-rivet-expansion-panel>
    `
  })
  class WrapperComponent {
    @ViewChild(RivetExpansionPanelComponent) expansionPanel: RivetExpansionPanelComponent;
  }
  @Component({
    template: `
      <advicent-rivet-expansion-panel>
        <div header-content>Header content</div>
        <div expansion-content>Expansion content</div>
      </advicent-rivet-expansion-panel>
    `
  })
  class WrapperNoCallbackComponent {
    @ViewChild(RivetExpansionPanelComponent) expansionPanel: RivetExpansionPanelComponent;
    public addButtonCallback = () => {};
    public deleteButtonCallback = () => {};
  }
  let component: RivetExpansionPanelComponent;
  let fixture: ComponentFixture<RivetExpansionPanelComponent>;

  let wrapperFixture: ComponentFixture<WrapperComponent>;
  let wrapperComponent: WrapperComponent;

  let wrapperNoCallbackFixture: ComponentFixture<WrapperNoCallbackComponent>;
  let wrapperNoCallbackComponent: WrapperNoCallbackComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MaterialComponentModule],
      declarations: [RivetExpansionPanelComponent, WrapperComponent, WrapperNoCallbackComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    wrapperFixture = TestBed.createComponent(WrapperComponent);
    wrapperComponent = wrapperFixture.componentInstance;
    wrapperNoCallbackFixture = TestBed.createComponent(WrapperNoCallbackComponent);
    wrapperNoCallbackComponent = wrapperNoCallbackFixture.componentInstance;
    fixture = TestBed.createComponent(RivetExpansionPanelComponent);
    component = fixture.componentInstance;

    wrapperFixture.detectChanges();
    wrapperNoCallbackFixture.detectChanges();
    fixture.detectChanges();
  });

  afterEach(() => {
    wrapperFixture.destroy();
    wrapperNoCallbackFixture.destroy();
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

  describe('add button callback', () => {
    it('should not show add button if callback is not set', () => {
      const expansionPanel = wrapperNoCallbackFixture.debugElement.componentInstance.expansionPanel;
      spyOn(expansionPanel.addButtonCallback, 'emit').and.callThrough();

      const toggleButton = expansionPanel.element.nativeElement.querySelector('.toggle-expansion-btn');
      toggleButton.click();

      const addButton = expansionPanel.element.nativeElement.querySelector('.bottom-button-bar .add-btn');

      expect(addButton).toBeNull();
    });
    it('should call an add button callback on click (if there is one)', () => {
      const expansionPanel = wrapperFixture.debugElement.componentInstance.expansionPanel;
      spyOn(expansionPanel.addButtonCallback, 'emit').and.callThrough();

      const toggleButton = expansionPanel.element.nativeElement.querySelector('.toggle-expansion-btn');
      toggleButton.click();

      const addButton = expansionPanel.element.nativeElement.querySelector('.bottom-button-bar .add-btn');

      addButton.click();
      expect(expansionPanel.addButtonCallback.emit).toHaveBeenCalledWith();
    });
  });

  describe('delete button callback', () => {
    it('should not show delete button if callback is not set', () => {
      const expansionPanel = wrapperNoCallbackFixture.debugElement.componentInstance.expansionPanel;
      spyOn(expansionPanel.deleteButtonCallback, 'emit').and.callThrough();

      const deleteButton = expansionPanel.element.nativeElement.querySelector('.rivet-icon-delete');

      expect(deleteButton).toBeNull();
    });
    it('should call a delete button callback on click (if there is one)', () => {
      const expansionPanel = wrapperFixture.debugElement.componentInstance.expansionPanel;
      spyOn(expansionPanel.deleteButtonCallback, 'emit').and.callThrough();

      const deleteButton = expansionPanel.element.nativeElement.querySelector('.rivet-icon-delete');

      expect(deleteButton).not.toBeNull();
    });
  });
});

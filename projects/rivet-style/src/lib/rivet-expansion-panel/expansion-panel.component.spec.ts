import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
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
    @ViewChild(RivetExpansionPanelComponent, /* TODO: add static flag */ {}) expansionPanel: RivetExpansionPanelComponent;
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
    @ViewChild(RivetExpansionPanelComponent, /* TODO: add static flag */ {}) expansionPanel: RivetExpansionPanelComponent;
    public addButtonCallback = () => {};
    public deleteButtonCallback = () => {};
  }

  @Component({
    template: `
      <advicent-rivet-expansion-panel
        [hideExpansionContent]="true"
        (addButtonCallback)="(addButtonCallback)"
        (deleteButtonCallback)="(deleteButtonCallback)"
      >
        <div header-content>Header content</div>
        <div expansion-content>Expansion content</div>
      </advicent-rivet-expansion-panel>
    `
  })
  class WrapperHasNoExpansionContentComponent {
    @ViewChild(RivetExpansionPanelComponent, /* TODO: add static flag */ {}) expansionPanel: RivetExpansionPanelComponent;
  }

  @Component({
    template: `
      <advicent-rivet-expansion-panel
        [hideExpansionContent]="false"
        (addButtonCallback)="(addButtonCallback)"
        (deleteButtonCallback)="(deleteButtonCallback)"
      >
        <div header-content>Header content</div>
        <div expansion-content>Expansion content</div>
      </advicent-rivet-expansion-panel>
    `
  })
  class WrapperHasExpansionContentComponent {
    @ViewChild(RivetExpansionPanelComponent, /* TODO: add static flag */ {}) expansionPanel: RivetExpansionPanelComponent;
  }

  let component: RivetExpansionPanelComponent;
  let fixture: ComponentFixture<RivetExpansionPanelComponent>;

  let wrapperFixture: ComponentFixture<WrapperComponent>;
  let wrapperComponent: WrapperComponent;

  let wrapperNoCallbackFixture: ComponentFixture<WrapperNoCallbackComponent>;
  let wrapperNoCallbackComponent: WrapperNoCallbackComponent;

  let wrapperHasNoExpansionContentFixture: ComponentFixture<WrapperHasNoExpansionContentComponent>;
  let wrapperHasNoExpansionContentComponent: WrapperHasNoExpansionContentComponent;

  let wrapperHasExpansionContentFixture: ComponentFixture<WrapperHasExpansionContentComponent>;
  let wrapperHasExpansionContentComponent: WrapperHasExpansionContentComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MaterialComponentModule],
      declarations: [
        RivetExpansionPanelComponent,
        WrapperComponent,
        WrapperNoCallbackComponent,
        WrapperHasNoExpansionContentComponent,
        WrapperHasExpansionContentComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    wrapperFixture = TestBed.createComponent(WrapperComponent);
    wrapperComponent = wrapperFixture.componentInstance;
    wrapperNoCallbackFixture = TestBed.createComponent(WrapperNoCallbackComponent);
    wrapperNoCallbackComponent = wrapperNoCallbackFixture.componentInstance;
    wrapperHasNoExpansionContentFixture = TestBed.createComponent(WrapperHasNoExpansionContentComponent);
    wrapperHasNoExpansionContentComponent = wrapperHasNoExpansionContentFixture.componentInstance;
    wrapperHasExpansionContentFixture = TestBed.createComponent(WrapperHasExpansionContentComponent);
    wrapperHasExpansionContentComponent = wrapperHasExpansionContentFixture.componentInstance;
    fixture = TestBed.createComponent(RivetExpansionPanelComponent);
    component = fixture.componentInstance;

    wrapperFixture.detectChanges();
    wrapperNoCallbackFixture.detectChanges();
    wrapperHasNoExpansionContentFixture.detectChanges();
    wrapperHasExpansionContentFixture.detectChanges();
    fixture.detectChanges();
  });

  afterEach(() => {
    wrapperFixture.destroy();
    wrapperNoCallbackFixture.destroy();
    wrapperHasNoExpansionContentFixture.destroy();
    wrapperHasExpansionContentFixture.destroy();
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

  describe('toggle expansion button', () => {
    it('should show expansion button by default', () => {
      const expansionPanel = wrapperFixture.debugElement.componentInstance.expansionPanel;
      const expansionButton = expansionPanel.element.nativeElement.querySelector('.toggle-expansion-btn');

      expect(expansionButton).not.toBeNull();
    });
    it('should show expansion button if passing true', () => {
      const expansionPanel = wrapperHasExpansionContentFixture.debugElement.componentInstance.expansionPanel;
      const expansionButton = expansionPanel.element.nativeElement.querySelector('.toggle-expansion-btn');

      expect(expansionButton).not.toBeNull();
    });
    it('should not show expansion button if passing false', () => {
      const expansionPanel = wrapperHasNoExpansionContentFixture.debugElement.componentInstance.expansionPanel;
      const expansionButton = expansionPanel.element.nativeElement.querySelector('.toggle-expansion-btn');

      expect(expansionButton).toBeNull();
    });
  });
});

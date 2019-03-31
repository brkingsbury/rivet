import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentModule } from '../material-component-module';
import { RivetExpansionPanelComponent } from './expansion-panel.component';

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

  it('should be toggleable', () => {
    expect(component.panelExpanded).toBe(false);
    const toggleButton = fixture.debugElement.query(
      By.css('.toggle-expansion-btn')
    ).nativeElement;
    toggleButton.click();
    expect(component.panelExpanded).toBe(true);
    toggleButton.click();
    expect(component.panelExpanded).toBe(false);
    toggleButton.click();
    expect(component.panelExpanded).toBe(true);

    const closeButton = fixture.debugElement.query(
      By.css('.bottom-button-bar .close-btn')
    ).nativeElement;
    closeButton.click();
    expect(component.panelExpanded).toBe(false);
  });

  it('should dynamically change height', () => {
    // not expanded by default
    expect(component.panelHeight).toEqual(component.defaultExpansionHeight);
    const toggleButton = fixture.debugElement.query(
      By.css('.toggle-expansion-btn')
    ).nativeElement;

    // expanded
    toggleButton.click();
    expect(component.panelHeight).toBeGreaterThan(
      component.defaultExpansionHeight
    );

    // not expanded
    toggleButton.click();
    expect(component.panelHeight).toEqual(component.defaultExpansionHeight);
  });

  it('should call an add button callback', () => {
    spyOn(component.addButtonCallback, 'emit');
    const toggleButton = fixture.debugElement.query(
      By.css('.toggle-expansion-btn')
    ).nativeElement;
    toggleButton.click();

    const addButton = fixture.debugElement.query(
      By.css('.bottom-button-bar .add-btn')
    ).nativeElement;
    addButton.click();
    expect(component.addButtonCallback.emit).toHaveBeenCalledWith();
  });
});

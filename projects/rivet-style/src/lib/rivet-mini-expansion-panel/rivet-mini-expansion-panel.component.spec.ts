import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RivetMiniExpansionPanelComponent } from './rivet-mini-expansion-panel.component';

describe('RivetMiniExpansionPanelComponent', () => {
  let component: RivetMiniExpansionPanelComponent;
  let fixture: ComponentFixture<RivetMiniExpansionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RivetMiniExpansionPanelComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RivetMiniExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});

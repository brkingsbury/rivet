import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RivetAccordionGroupComponent } from './rivet-accordion-group.component';

describe('RivetAccordionGroupComponent', () => {
  let component: RivetAccordionGroupComponent;
  let fixture: ComponentFixture<RivetAccordionGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RivetAccordionGroupComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RivetAccordionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RivetDrawerComponent } from './rivet-drawer.component';

describe('RivetDrawerComponent', () => {
  let component: RivetDrawerComponent;
  let fixture: ComponentFixture<RivetDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RivetDrawerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RivetDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});

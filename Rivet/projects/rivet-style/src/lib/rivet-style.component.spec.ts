import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RivetStyleComponent } from './rivet-style.component';

describe('RivetStyleComponent', () => {
  let component: RivetStyleComponent;
  let fixture: ComponentFixture<RivetStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RivetStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RivetStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

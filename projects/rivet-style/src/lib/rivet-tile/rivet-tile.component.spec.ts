import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RivetTileComponent } from './rivet-tile.component';

describe('RivetTileComponent', () => {
  let component: RivetTileComponent;
  let fixture: ComponentFixture<RivetTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RivetTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RivetTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

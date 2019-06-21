import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialComponentModule } from 'projects/rivet-style/src/public_api';
import { DesignComponent } from './design.component';


describe('DesignComponent', () => {
  let component: DesignComponent;
  let fixture: ComponentFixture<DesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialComponentModule ],
      declarations: [ DesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialComponentModule } from 'projects/rivet-style/src/lib/material-component-module';
import { RivetCardComponent, RivetStyleComponent } from 'rivet-style';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialComponentModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        NavComponent,
        RivetCardComponent,
        RivetStyleComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  // it(`should have as title 'Advicent Rivet Component Library'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('Advicent Rivet Component Library');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to Advicent Rivet Component Library!');
  // }));
});

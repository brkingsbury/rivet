import { TestBed, inject } from '@angular/core/testing';

import { ComponentsComponent } from './components.component';

describe('ComponentsComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentsComponent]
    });
  });

  it('should be created', inject([ComponentsComponent], (component: ComponentsComponent) => {
    expect(component).toBeTruthy();
  }));
});

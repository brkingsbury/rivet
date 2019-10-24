import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { RivetMiniExpansionPanelComponent } from './rivet-mini-expansion-panel.component';

describe('RivetMiniExpansionPanelComponent', () => {
  let component: RivetMiniExpansionPanelComponent;
  let fixture: ComponentFixture<RivetMiniExpansionPanelComponent>;

  function createComponent() {
    fixture = TestBed.createComponent(RivetMiniExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RivetMiniExpansionPanelComponent]
    }).compileComponents();

    createComponent();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default _panelOpen to false', () => {
    expect(component.panelOpen).toBe(false);
  });

  describe('setting panelOpen true', () => {

    beforeEach(fakeAsync(() => {
      createComponent();

      spyOn(component, 'closeExpansion').and.callThrough();
      spyOn(component, 'openExpansion').and.callThrough();
      spyOn(component, 'toggleMiniExpansion').and.callThrough();
      spyOn(component.panelOpenEvent, 'emit').and.callThrough();

      component.panelOpen = true;
    }));

    it('should update _panelOpen', () => {
      expect(component.panelOpen).toBe(true);
    });

    it('should not call closeExpansion', () => {
      expect(component.closeExpansion).toHaveBeenCalledTimes(0);
    });

    it('should call openExpansion', () => {
      expect(component.openExpansion).toHaveBeenCalledTimes(1);
    });

    it('should emit and event when openExpansion is called', () => {
      expect(component.panelOpenEvent.emit).toHaveBeenCalledTimes(1);
    });

    describe('toggling open', () => {

      beforeEach(fakeAsync(() => {
        component.toggleMiniExpansion();
        component.toggleMiniExpansion();
      }));

      it('should call toggleMiniExpansion', () => {
        expect(component.toggleMiniExpansion).toHaveBeenCalledTimes(2);
      });


      it('should call openExpansion', () => {
        expect(component.openExpansion).toHaveBeenCalledTimes(2);
      });

      it('should emit and event when openExpansion is called', () => {
        expect(component.panelOpenEvent.emit).toHaveBeenCalledTimes(2);
      });

    });
  });

  describe('setting panelOpen false', () => {

    beforeEach(fakeAsync(() => {
      createComponent();

      spyOn(component, 'closeExpansion').and.callThrough();
      spyOn(component, 'openExpansion').and.callThrough();
      spyOn(component, 'toggleMiniExpansion').and.callThrough();
      spyOn(component.panelOpenEvent, 'emit').and.callThrough();

      component.panelOpen = false;
    }));

    it('should update _panelOpen', () => {
      expect(component.panelOpen).toBe(false);
    });

    it('should call closeExpansion', () => {
      expect(component.closeExpansion).toHaveBeenCalledTimes(1);
    });

    it('should not call openExpansion', () => {
      expect(component.openExpansion).toHaveBeenCalledTimes(0);
    });

    it('should bit emit and event when closeExpansion is called', () => {
      expect(component.panelOpenEvent.emit).toHaveBeenCalledTimes(0);
    });

    describe('toggling closed', () => {

      beforeEach(fakeAsync(() => {
        component.toggleMiniExpansion();
        component.toggleMiniExpansion();
      }));

      it('should call toggleMiniExpansion', () => {
        expect(component.toggleMiniExpansion).toHaveBeenCalledTimes(2);
      });


      it('should call closeExpansion', () => {
        expect(component.closeExpansion).toHaveBeenCalledTimes(2);
      });

      it('should not emit and event when closeExpansion is called', () => {
        expect(component.panelOpenEvent.emit).toHaveBeenCalledTimes(1);
      });

    });
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingnalsExComponent } from './singnals-ex.component';

describe('SingnalsExComponent', () => {
  let component: SingnalsExComponent;
  let fixture: ComponentFixture<SingnalsExComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingnalsExComponent]
    });
    fixture = TestBed.createComponent(SingnalsExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoAComponent } from './deco-a.component';

describe('DecoAComponent', () => {
  let component: DecoAComponent;
  let fixture: ComponentFixture<DecoAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecoAComponent]
    });
    fixture = TestBed.createComponent(DecoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherOrderObservableComponent } from './higher-order-observable.component';

describe('HigherOrderObservableComponent', () => {
  let component: HigherOrderObservableComponent;
  let fixture: ComponentFixture<HigherOrderObservableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HigherOrderObservableComponent]
    });
    fixture = TestBed.createComponent(HigherOrderObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

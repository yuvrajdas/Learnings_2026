import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncValComponent } from './async-val.component';

describe('AsyncValComponent', () => {
  let component: AsyncValComponent;
  let fixture: ComponentFixture<AsyncValComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncValComponent]
    });
    fixture = TestBed.createComponent(AsyncValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

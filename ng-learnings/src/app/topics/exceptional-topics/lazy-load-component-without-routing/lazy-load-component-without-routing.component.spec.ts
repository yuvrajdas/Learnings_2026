import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadComponentWithoutRoutingComponent } from './lazy-load-component-without-routing.component';

describe('LazyLoadComponentWithoutRoutingComponent', () => {
  let component: LazyLoadComponentWithoutRoutingComponent;
  let fixture: ComponentFixture<LazyLoadComponentWithoutRoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazyLoadComponentWithoutRoutingComponent]
    });
    fixture = TestBed.createComponent(LazyLoadComponentWithoutRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

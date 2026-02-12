import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadComWithoutRoutingComponent } from './lazy-load-com-without-routing.component';

describe('LazyLoadComWithoutRoutingComponent', () => {
  let component: LazyLoadComWithoutRoutingComponent;
  let fixture: ComponentFixture<LazyLoadComWithoutRoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazyLoadComWithoutRoutingComponent]
    });
    fixture = TestBed.createComponent(LazyLoadComWithoutRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

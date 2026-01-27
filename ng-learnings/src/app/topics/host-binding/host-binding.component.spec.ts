import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostBindingComponent } from './host-binding.component';

describe('HostBindingComponent', () => {
  let component: HostBindingComponent;
  let fixture: ComponentFixture<HostBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostBindingComponent]
    });
    fixture = TestBed.createComponent(HostBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

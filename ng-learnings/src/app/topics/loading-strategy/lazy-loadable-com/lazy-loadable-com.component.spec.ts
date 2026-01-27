import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadableComComponent } from './lazy-loadable-com.component';

describe('LazyLoadableComComponent', () => {
  let component: LazyLoadableComComponent;
  let fixture: ComponentFixture<LazyLoadableComComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazyLoadableComComponent]
    });
    fixture = TestBed.createComponent(LazyLoadableComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

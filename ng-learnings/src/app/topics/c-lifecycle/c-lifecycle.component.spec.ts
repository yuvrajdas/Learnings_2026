import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CLifecycleComponent } from './c-lifecycle.component';

describe('CLifecycleComponent', () => {
  let component: CLifecycleComponent;
  let fixture: ComponentFixture<CLifecycleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CLifecycleComponent]
    });
    fixture = TestBed.createComponent(CLifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

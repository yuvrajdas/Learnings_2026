import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyCComponent } from './lazy-c.component';

describe('LazyCComponent', () => {
  let component: LazyCComponent;
  let fixture: ComponentFixture<LazyCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazyCComponent]
    });
    fixture = TestBed.createComponent(LazyCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

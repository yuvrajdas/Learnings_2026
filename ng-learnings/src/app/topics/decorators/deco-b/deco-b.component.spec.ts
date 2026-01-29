import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoBComponent } from './deco-b.component';

describe('DecoBComponent', () => {
  let component: DecoBComponent;
  let fixture: ComponentFixture<DecoBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecoBComponent]
    });
    fixture = TestBed.createComponent(DecoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

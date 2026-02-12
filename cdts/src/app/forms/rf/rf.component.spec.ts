import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfComponent } from './rf.component';

describe('RfComponent', () => {
  let component: RfComponent;
  let fixture: ComponentFixture<RfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RfComponent]
    });
    fixture = TestBed.createComponent(RfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

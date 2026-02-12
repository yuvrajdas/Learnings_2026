import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessingDomEleComponent } from './accessing-dom-ele.component';

describe('AccessingDomEleComponent', () => {
  let component: AccessingDomEleComponent;
  let fixture: ComponentFixture<AccessingDomEleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessingDomEleComponent]
    });
    fixture = TestBed.createComponent(AccessingDomEleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

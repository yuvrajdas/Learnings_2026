import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessingDomElementComponent } from './accessing-dom-element.component';

describe('AccessingDomElementComponent', () => {
  let component: AccessingDomElementComponent;
  let fixture: ComponentFixture<AccessingDomElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessingDomElementComponent]
    });
    fixture = TestBed.createComponent(AccessingDomElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessEleDomComponent } from './access-ele-dom.component';

describe('AccessEleDomComponent', () => {
  let component: AccessEleDomComponent;
  let fixture: ComponentFixture<AccessEleDomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessEleDomComponent]
    });
    fixture = TestBed.createComponent(AccessEleDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsAllComponent } from './rxjs-all.component';

describe('RxjsAllComponent', () => {
  let component: RxjsAllComponent;
  let fixture: ComponentFixture<RxjsAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsAllComponent]
    });
    fixture = TestBed.createComponent(RxjsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingStrategyComponent } from './loading-strategy.component';

describe('LoadingStrategyComponent', () => {
  let component: LoadingStrategyComponent;
  let fixture: ComponentFixture<LoadingStrategyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingStrategyComponent]
    });
    fixture = TestBed.createComponent(LoadingStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

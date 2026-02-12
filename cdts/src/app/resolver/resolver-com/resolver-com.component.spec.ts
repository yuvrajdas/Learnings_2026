import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolverComComponent } from './resolver-com.component';

describe('ResolverComComponent', () => {
  let component: ResolverComComponent;
  let fixture: ComponentFixture<ResolverComComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResolverComComponent]
    });
    fixture = TestBed.createComponent(ResolverComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

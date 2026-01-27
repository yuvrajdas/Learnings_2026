import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAComponent } from './content-a.component';

describe('ContentAComponent', () => {
  let component: ContentAComponent;
  let fixture: ComponentFixture<ContentAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentAComponent]
    });
    fixture = TestBed.createComponent(ContentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

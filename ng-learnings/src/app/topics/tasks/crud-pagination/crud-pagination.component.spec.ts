import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPaginationComponent } from './crud-pagination.component';

describe('CrudPaginationComponent', () => {
  let component: CrudPaginationComponent;
  let fixture: ComponentFixture<CrudPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudPaginationComponent]
    });
    fixture = TestBed.createComponent(CrudPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

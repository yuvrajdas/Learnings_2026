import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSortPaginationComponent } from './search-sort-pagination.component';

describe('SearchSortPaginationComponent', () => {
  let component: SearchSortPaginationComponent;
  let fixture: ComponentFixture<SearchSortPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchSortPaginationComponent]
    });
    fixture = TestBed.createComponent(SearchSortPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

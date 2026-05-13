import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSearch } from './users-search';

describe('UsersSearch', () => {
  let component: UsersSearch;
  let fixture: ComponentFixture<UsersSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

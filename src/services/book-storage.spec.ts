import { TestBed } from '@angular/core/testing';

import { BookStorage } from './book-storage';

describe('BookStorage', () => {
  let service: BookStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

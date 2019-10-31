import { TestBed } from '@angular/core/testing';

import { FirebasePathService } from './firebase-path.service';

describe('FirebasePathService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebasePathService = TestBed.get(FirebasePathService);
    expect(service).toBeTruthy();
  });
});

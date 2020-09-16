import { TestBed } from '@angular/core/testing';

import { CompactDiskService } from './compact-disk.service';

describe('CompactDiskService', () => {
  let service: CompactDiskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompactDiskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

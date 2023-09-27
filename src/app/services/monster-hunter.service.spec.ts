import { TestBed } from '@angular/core/testing';

import { MonsterHunterService } from './monster-hunter.service';

describe('MonsterHunterService', () => {
  let service: MonsterHunterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonsterHunterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

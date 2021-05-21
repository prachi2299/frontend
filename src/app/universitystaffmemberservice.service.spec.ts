import { TestBed } from '@angular/core/testing';

import { UniversitystaffmemberserviceService } from './universitystaffmemberservice.service';

describe('UniversitystaffmemberserviceService', () => {
  let service: UniversitystaffmemberserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniversitystaffmemberserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

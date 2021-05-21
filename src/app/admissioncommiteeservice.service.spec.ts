import { TestBed } from '@angular/core/testing';

import { AdmissioncommiteeService } from './admissioncommiteeservice.service';

describe('AdmissioncommiteeserviceService', () => {
  let service: AdmissioncommiteeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmissioncommiteeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

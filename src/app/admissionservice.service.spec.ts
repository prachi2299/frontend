import { TestBed } from '@angular/core/testing';

import { AdmissionserviceService } from './admissionservice.service';

describe('AdmissionserviceService', () => {
  let service: AdmissionserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmissionserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ServiceControllerService } from './service-controller.service';

describe('ServiceControllerService', () => {
  let service: ServiceControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

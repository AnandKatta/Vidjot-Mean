import { TestBed, inject } from '@angular/core/testing';

import { VidjotService } from './vidjot.service';

describe('VidjotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VidjotService]
    });
  });

  it('should be created', inject([VidjotService], (service: VidjotService) => {
    expect(service).toBeTruthy();
  }));
});
